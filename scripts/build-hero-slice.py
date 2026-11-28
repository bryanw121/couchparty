"""Author the first detailed art slice, unwrap it, bake atlases, and export game meshes.
Blender 4.5 LTS: --background --python-exit-code 1 --python scripts/build-hero-slice.py
Editable meshes, material nodes and role groups are retained in art-source/hero-slice.blend.
"""
import bpy,math,json,base64,array,os,tempfile
from mathutils import Vector
from math import sin,cos,pi,sqrt,exp
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
ROOT=os.getcwd();os.makedirs('art-source',exist_ok=True);os.makedirs('public/hero-assets',exist_ok=True)
os.makedirs('dist/blender-temp',exist_ok=True);tempfile.tempdir=os.path.join(ROOT,'dist/blender-temp')
assets={};palette={}
def linear(c):return c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4
def rgb(h):return tuple(linear(((h>>s)&255)/255) for s in (16,8,0))
def mat(name,color,rough=.5,metal=0):
 m=bpy.data.materials.new(name);m.use_nodes=True;m.diffuse_color=(*rgb(color),1);m['roughness']=rough;m['metalness']=metal
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal;p.inputs['Coat Weight'].default_value=.28 if name=='paint' else .025;p.inputs['Coat Roughness'].default_value=.35
 c=m.node_tree.nodes.new('ShaderNodeVertexColor');c.layer_name='paint';m.node_tree.links.new(c.outputs['Color'],p.inputs['Base Color']);palette[m.name]=(color,rough,metal);return m
skin=mat('skin',0xffc397,.5);red=mat('shirt',0xe92935,.7);denim=mat('denim',0x255dc9,.75);hair=mat('hair',0x4a251b,.58);white=mat('ivory',0xfff8e9,.38);ink=mat('ink',0x111d30,.3);iris=mat('iris',0x167ed6,.25);gold=mat('gold',0xffce48,.28,.55);shoe=mat('leather',0x673823,.55);sole=mat('sole',0x36281f,.8);paint=mat('paint',0xe6313b,.32);navy=mat('seat',0x202e48,.75);silver=mat('chrome',0xc7d5df,.24,.72);green=mat('shell-green',0x27b54c,.43);seam=mat('shell-seam',0x147936,.58);sand=mat('sandstone',0xffdb9c,.7);rose=mat('ceramic',0xde5276,.5);teal=mat('mint',0x91d9c3,.64);window=mat('glass-blue',0x294b70,.3);wood=mat('wood',0x966342,.68);leaf=mat('leaf',0x49a66b,.6)
def tag(o,asset,role,m,name):
 o.name=name;o['asset']=asset;o['role']=role;assets.setdefault(asset,[]).append(o);o.data.materials.append(m)
 for p in o.data.polygons:p.use_smooth=True
 return o
def mesh(asset,role,name,verts,faces,m):
 data=bpy.data.meshes.new(name);data.from_pydata(verts,[],faces);data.update();o=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(o);return tag(o,asset,role,m,name)
def ell(asset,role,name,loc,scale,m,segments=32,rings=20):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=segments,ring_count=rings,location=loc);o=bpy.context.object;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);return tag(o,asset,role,m,name)
def box(asset,role,name,loc,scale,m,bevel=.05):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 if bevel:
  b=o.modifiers.new('Soft designed edges','BEVEL');b.width=min(bevel,min(scale)*.4);b.segments=3;bpy.ops.object.modifier_apply(modifier=b.name)
 return tag(o,asset,role,m,name)
def tube(asset,role,name,points,radius,m):
 curve=bpy.data.curves.new(name,'CURVE');curve.dimensions='3D';curve.resolution_u=12;curve.bevel_depth=radius;curve.bevel_resolution=3;s=curve.splines.new('BEZIER');s.bezier_points.add(len(points)-1)
 for b,p in zip(s.bezier_points,points):b.co=p;b.handle_left_type=b.handle_right_type='AUTO'
 o=bpy.data.objects.new(name,curve);bpy.context.collection.objects.link(o);bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o=bpy.context.object;o.select_set(False);return tag(o,asset,role,m,name)
def text(asset,role,name,word,loc,size,m,rotation=(pi/2,0,0)):
 c=bpy.data.curves.new(name,'FONT');c.body=word;c.align_x='CENTER';c.align_y='CENTER';c.size=size;c.extrude=.002;c.bevel_depth=.001;c.bevel_resolution=2
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.location=loc;o.rotation_euler=rotation;bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o=bpy.context.object;o.select_set(False);return tag(o,asset,role,m,name)
H=Vector((0,.14,1.05))
def hp(x,front,z):return tuple(H+Vector((x,-front,z)))
def face_front(x,z):
 base=.245*sqrt(max(.005,1-(x/.305)**2-((z-.015)/.31)**2))
 nose=max(0,1-(x/.117)**2-((z+.018)/.108)**2)
 bridge=.023*exp(-(x/.045)**2-((z-.09)/.11)**2)
 cheeks=.014*(exp(-((x-.16)/.08)**2-((z+.07)/.09)**2)+exp(-((x+.16)/.08)**2-((z+.07)/.09)**2))
 sockets=.01*(exp(-((x-.102)/.075)**2-((z-.1)/.1)**2)+exp(-((x+.102)/.075)**2-((z-.1)/.1)**2))
 return base+bridge+cheeks-sockets
# Explicit facial surface: continuous bridge, nose, cheeks and tapered jaw.
v=[];f=[];N=96;R=56
for j in range(R+1):
 lat=-pi/2+j*pi/R;z=.015+.31*sin(lat);jaw=1-.12*max(0,-sin(lat));
 for i in range(N+1):
  a=-pi+i*2*pi/N;x=.305*cos(lat)*sin(a)*jaw;front=.245*cos(lat)*cos(a)
  if cos(a)>0:front=face_front(x,z)*max(0,cos(a))**.12
  v.append(hp(x,front,z))
for j in range(R):
 for i in range(N):k=j*(N+1)+i;f.extend([(k,k+1,k+N+2,k+N+1)])
mesh('mario','head','mario-sculpted-face',v,f,skin)
ell('mario','head','rounded-nose',hp(0,.279,-.018),(.126,.116,.108),skin,48,32)
# Hair follows the back of the head, with shaped sideburns and inset ear folds.
ell('mario','head','hair-back',hp(0,-.105,.035),(.301,.17,.265),hair)
for side in [-1,1]:
 ell('mario','head','ear',hp(side*.299,.025,-.015),(.071,.063,.105),skin)
 tube('mario','head','ear-fold',[hp(side*.328,.071,.045),hp(side*.344,.078,-.005),hp(side*.326,.079,-.06)],.012,mat('ear-warm-'+str(side),0xd98261,.65))
 ell('mario','head','sideburn',hp(side*.261,.12,.035),(.035,.033,.081),hair)
def eye_patch(side,m,name,rx,rz,depth,zcenter=.093,xshift=0):
 verts=[];faces=[];radial=8;around=48;cx=side*.102+xshift
 for j in range(radial+1):
  r=j/radial
  for i in range(around+1):
   a=i*2*pi/around;x=cx+rx*r*cos(a);z=zcenter+rz*r*sin(a);front=face_front(x,z)+depth+.012*(1-r*r);verts.append(hp(x,front,z))
 for j in range(radial):
  for i in range(around):k=j*(around+1)+i;faces.append((k,k+around+1,k+around+2,k+1))
 return mesh('mario','eyeL' if side<0 else 'eyeR',name,verts,faces,m)
for side in [-1,1]:
 eye_patch(side,white,'eye-white',.073,.103,.005)
 eye_patch(side,iris,'blue-iris',.031,.061,.019,.087)
 eye_patch(side,ink,'pupil',.014,.044,.024,.087)
 eye_patch(side,white,'eye-catchlight',.009,.013,.03,.112,-.009)
 tube('mario','head','eyebrow',[hp(side*.04,face_front(side*.04,.215)+.009,.215),hp(side*.10,face_front(side*.10,.237)+.008,.237),hp(side*.174,face_front(side*.174,.208)+.006,.208)],.022,hair)
# Curved scalloped moustache hugs the facial surface, with a rounded thick middle.
v=[];f=[]
for j in range(9):
 t=j/8
 for i in range(65):
  x=-.211+i*.422/64;edge=sqrt(max(0,1-(x/.215)**2));top=-.069-.012*edge;bottom=top-(.035+.045*(.5+.5*cos(x/.211*pi*6)))*edge;z=top*(1-t)+bottom*t
  v.append(hp(x,face_front(x,z)+.012+.02*sin(pi*t)*edge,z))
for j in range(8):
 for i in range(64):k=j*65+i;f.append((k,k+65,k+66,k+1))
for side in [-1,1]:
 for x,z in [(side*.035,-.132),(side*.095,-.122),(side*.16,-.102)]:
  ell('mario','head','moustache-lobe',hp(x,face_front(x,z)+.026,z),(.056,.028,.034),hair,28,18)
tube('mario','head','moustache-upper',[hp(x,face_front(x,z)+.02,z) for x,z in [(-.2,-.076),(-.12,-.09),(0,-.105),(.12,-.09),(.2,-.076)]],.022,hair)
tube('mario','head','smile',[hp(-.083,face_front(-.083,-.19)+.002,-.19),hp(0,face_front(0,-.211)+.003,-.211),hp(.083,face_front(.083,-.19)+.002,-.19)],.006,mat('smile',0x944b37,.6))
# One flowing cap crown and a single swept visor, with stitched seams.
v=[];f=[]
for j in range(25):
 a=j/24*pi/2
 for i in range(65):
  b=i/64*2*pi;v.append(hp(.342*sin(a)*sin(b),-.02+.302*sin(a)*cos(b),.23+.185*cos(a)))
for j in range(24):
 for i in range(64):k=j*65+i;f.append((k,k+65,k+66,k+1))
mesh('mario','head','cap-crown',v,f,red)
v=[];f=[]
for j in range(13):
 t=j/12
 for i in range(49):
  x=-.35+i*.7/48;shape=sqrt(max(0,1-(x/.36)**2));front=.105+(.29*shape)*t;z=.233-.025*t+.018*(1-(x/.35)**2);v.append(hp(x,front,z))
for j in range(12):
 for i in range(48):k=j*49+i;f.append((k,k+49,k+50,k+1))
visor=mesh('mario','head','cap-visor',v,f,red);solid=visor.modifiers.new('Visor thickness','SOLIDIFY');solid.thickness=.018;bpy.context.view_layer.objects.active=visor;bpy.ops.object.modifier_apply(modifier=solid.name)
def cap_front(x,z):return -.02+.302*sqrt(max(.002,1-(x/.342)**2-((z-.23)/.185)**2))
patch=ell('mario','head','cap-white-patch',hp(0,.273,.333),(.093,.014,.076),white)
for vertex in patch.data.vertices:
 world=patch.matrix_world@vertex.co;z=world.z-H.z;front=cap_front(world.x,z)+.001-.003*(vertex.co.y/.014);world.y=H.y-front;vertex.co=patch.matrix_world.inverted()@world
patch.data.update()
emblem=text('mario','head','cap-M','M',hp(0,.291,.333),.12,red)
bpy.context.view_layer.update()
for vertex in emblem.data.vertices:
 world=emblem.matrix_world@vertex.co;world.y=H.y-cap_front(world.x,world.z-H.z)-.006;vertex.co=emblem.matrix_world.inverted()@world
emblem.data.update()
# Torso, tailored bib and straps; separate shoulder-pivoted sleeves and driving gloves.
ell('mario','body','mario-sculpted-shirt',(0,.125,.69),(.285,.23,.3),red)
ell('mario','body','mario-sculpted-overalls',(0,.05,.48),(.286,.24,.18),denim)
box('mario','body','overall-bib',(0,-.114,.655),(.35,.035,.24),denim,.045)
for side in [-1,1]:
 strap=box('mario','body','overall-strap',(side*.165,-.092,.785),(.061,.036,.23),denim,.02);strap.rotation_euler.y=-side*.13
 ell('mario','body','brass-button',(side*.16,-.126,.72),(.036,.014,.036),gold)
 tube('mario','body','bib-stitch',[(side*.155,-.138,.56),(side*.155,-.138,.65),(side*.15,-.138,.71)],.0025,mat('thread-'+str(side),0x9cbde7,.85))
 role='armL' if side<0 else 'armR';sleeve=ell('mario',role,'shirt-sleeve',(side*.277,.02,.754),(.115,.135,.17),red);sleeve.rotation_euler.y=side*.25
 forearm=ell('mario',role,'shirt-forearm',(side*.29,-.105,.65),(.085,.165,.093),red);forearm.rotation_euler.x=-.2
 box('mario',role,'glove-cuff',(side*.25,-.24,.635),(.18,.09,.17),white,.04)
 ell('mario',role,'glove-palm',(side*.23,-.285,.64),(.104,.087,.09),white)
 for k in range(4):ell('mario',role,'glove-finger',(side*(.18+k*.029),-.342,.64+(.012 if k in [1,2] else 0)),(.025,.047,.042),white,20,14)
 ell('mario',role,'glove-thumb',(side*.143,-.283,.651),(.045,.048,.056),white,24,16)
 for k in range(3):tube('mario',role,'glove-crease',[(side*(.195+k*.025),-.359,.656),(side*(.195+k*.025),-.362,.68)],.002,mat('glove-thread-'+str(side)+'-'+str(k),0xd5cbbb,.8))
 ell('mario','body','shoe-upper',(side*.19,-.285,.31),(.137,.218,.105),shoe)
 ell('mario','body','shoe-sole',(side*.19,-.285,.255),(.143,.224,.035),sole)
 tube('mario','body','shoe-stitch',[(side*.19-.10,-.38,.31),(side*.19,-.48,.31),(side*.19+.10,-.38,.31)],.0035,mat('shoe-thread-'+str(side),0xad8154,.75))
# Kart: open cockpit, shaped front fairing, split side pods and inset detailing.
def loft(name,sections,m):
 verts=[];faces=[]
 for z,width,center,height in sections:
  for i in range(49):
   a=i*2*pi/48;verts.append((width*cos(a),-z,center+height*sin(a)))
 for j in range(len(sections)-1):
  for i in range(48):k=j*49+i;faces.append((k,k+1,k+50,k+49))
 return mesh('kart','body',name,verts,faces,m)
loft('sculpted-body-shell',[(.23,.18,.4,.06),(.35,.42,.42,.12),(.55,.54,.445,.19),(.8,.57,.43,.2),(1.02,.49,.38,.14),(1.24,.27,.32,.07),(1.29,.01,.31,.005)],paint)
box('kart','body','chassis',(0,0,.23),(1.27,2.32,.13),navy,.055)
for side in [-1,1]:
 pod=ell('kart','body','side-pod',(side*.63,.13,.4),(.205,.68,.17),denim);pod.rotation_euler.z=-side*.05
 tube('kart','body','side-ivory-trim',[(side*.66,-.38,.35),(side*.76,.1,.34),(side*.66,.72,.34)],.024,white)
 tube('kart','body','front-suspension',[(side*.18,-.85,.25),(side*.55,-.85,.23),(side*.72,-.85,.26)],.025,silver)
 ell('kart','body','headlight-surround',(side*.4,-1.19,.4),(.102,.047,.085),silver)
 ell('kart','body','headlight',(side*.4,-1.228,.4),(.074,.018,.057),white)
 tube('kart','body','front-bumper',[(side*.68,-1.13,.255),(side*.6,-1.35,.255),(0,-1.4,.255)],.055,white)
 tube('kart','body','rear-wing-support',[(side*.39,.94,.42),(side*.39,1.05,.85)],.03,silver)
 box('kart','body','wing-endplate',(side*.7,1.07,.89),(.07,.39,.22),paint,.025)
 tube('kart','body','exhaust',[(side*.24,.94,.33),(side*.24,1.2,.38),(side*.24,1.43,.4)],.065,silver)
 ell('kart','body','exhaust-black',(side*.24,1.436,.4),(.049,.01,.049),navy)
 ell('kart','body','brake-light',(side*.49,1.08,.49),(.075,.026,.037),red)
box('kart','body','radiator',(0,-1.26,.345),(.43,.025,.12),navy,.025)
for x in [-.16,-.08,0,.08,.16]:box('kart','body','radiator-rib',(x,-1.28,.345),(.012,.012,.08),silver,.003)
seat=box('kart','body','seat-back',(0,.4,.67),(.59,.15,.61),navy,.07);seat.rotation_euler.x=-.1
for x in [-.19,-.095,0,.095,.19]:tube('kart','body','seat-stitch',[(x,.312,.44),(x,.31,.67),(x,.33,.89)],.0035,white)
box('kart','body','rear-wing',(0,1.07,.83),(1.44,.35,.095),paint,.04)
box('kart','body','wing-racing-stripe',(0,1.07,.882),(.19,.32,.009),white,.003)
box('kart','body','engine',(0,.86,.44),(.53,.47,.3),navy,.04)
for z in [.33,.38,.43,.48,.53]:box('kart','body','engine-fin',(0,.89,z),(.61,.42,.018),silver,.005)
verts=[];faces=[]
profile=[(.23,.18,.4,.06),(.35,.42,.42,.12),(.55,.54,.445,.19),(.8,.57,.43,.2),(1.02,.49,.38,.14),(1.24,.27,.32,.07)]
for j in range(7):
 for i in range(49):
  a=i*2*pi/48;r=j/6;x=.15*r*cos(a);forward=.78+.16*r*sin(a)
  for k in range(len(profile)-1):
   if profile[k][0]<=forward<=profile[k+1][0]:
    t=(forward-profile[k][0])/(profile[k+1][0]-profile[k][0]);width=profile[k][1]*(1-t)+profile[k+1][1]*t;center=profile[k][2]*(1-t)+profile[k+1][2]*t;height=profile[k][3]*(1-t)+profile[k+1][3]*t;break
  verts.append((x,-forward,center+height*sqrt(max(0,1-(x/width)**2))+.003))
for j in range(6):
 for i in range(48):k=j*49+i;faces.append((k,k+49,k+50,k+1))
mesh('kart','body','hood-patch',verts,faces,white)
text('kart','body','hood-M','M',(0,-.78,.638),.19,paint,(0,0,0))
# Mushroom: lathed profile and surface-fitted spots. Shell: inset modeled plates.
def lathe(asset,name,profile,m,segments=64):
 verts=[];faces=[]
 for radius,z in profile:
  for i in range(segments+1):a=i*2*pi/segments;verts.append((radius*sin(a),-radius*cos(a),z))
 for j in range(len(profile)-1):
  for i in range(segments):k=j*(segments+1)+i;faces.append((k,k+1,k+segments+2,k+segments+1))
 return mesh(asset,'body',name,verts,faces,m)
lathe('mushroom','mushroom-stem',[(0,.07),(.19,.07),(.3,.13),(.35,.28),(.34,.48),(.28,.62),(0,.64)],white)
lathe('mushroom','mushroom-cap',[(0,.57),(.45,.57),(.62,.59),(.7,.65)]+[(.7*sin(pi/2*(1-j/24)),.65+.63*cos(pi/2*(1-j/24))) for j in range(1,25)],paint)
for theta,phi in [(.13,0),(1,-.85),(1,.85),(1.4,0),(1.3,1.95),(1.3,-1.95),(1,pi)]:
 n=Vector((sin(theta)*sin(phi),-sin(theta)*cos(phi),cos(theta)));u=Vector((cos(phi),sin(phi),0));w=n.cross(u);verts=[];faces=[]
 for j in range(7):
  for i in range(33):
   a=i*2*pi/32;q=(n+u*(cos(a)*j/6*.31)+w*(sin(a)*j/6*.31)).normalized();q.z=max(.005,q.z);q.normalize();verts.append((q.x*.704,q.y*.704,.65+q.z*.634))
 for j in range(6):
  for i in range(32):k=j*33+i;faces.append((k,k+33,k+34,k+1))
 mesh('mushroom','body','mushroom-white-spot',verts,faces,white)
for side in [-1,1]:
 ell('mushroom','body','mushroom-eye',(side*.115,-.327,.31),(.037,.017,.095),ink)
 ell('mushroom','body','mushroom-glint',(side*.115-.008,-.343,.345),(.008,.004,.019),white,16,12)
lathe('shell','shell-underside',[(0,.08),(.35,.08),(.52,.16),(.57,.25),(.55,.34),(0,.34)],gold)
lathe('shell','shell-rim',[(.5,.28),(.61,.27),(.68,.31),(.695,.37),(.66,.43),(.57,.44),(.51,.39),(.5,.28)],white)
lathe('shell','shell-recess',[(.59*cos(j/28*pi/2),.39+.52*sin(j/28*pi/2)) for j in range(29)],seam)
def shell_plate(start,end,center=False):
 verts=[];faces=[]
 for j in range(13):
  t=j/12
  for i in range(33):
   a=start+(end-start)*i/32;sector=(a+pi/6)%(pi/3)-pi/6;boundary=.39*cos(pi/6)/cos(sector);r=t*(boundary-.018) if center else (boundary+.018)*(1-t)+.985*t
   verts.append((sin(a)*.594*r,-cos(a)*.594*r,.39+.525*sqrt(1-r*r)+.012+.018*sin(pi*t)))
 for j in range(12):
  for i in range(32):k=j*33+i;faces.append((k,k+33,k+34,k+1))
 mesh('shell','body','shell-convex-plate',verts,faces,green)
shell_plate(0,2*pi,True)
for i in range(6):shell_plate(i*pi/3+.025,(i+1)*pi/3-.025)
# A reusable authored shop kit, replacing only the first Mushroom Village district.
box('village','body','shop-foundation',(0,0,.28),(8.8,7.5,.56),sand,.15)
box('village','body','shop-stucco',(0,0,3.8),(8,6.8,7.1),teal,.23)
for z in [.9,4.6,7.15]:box('village','body','shop-cornice',(0,-.04,z),(8.4,7.1,.22),white,.07)
for side in [-1,1]:
 for z in [2.6,5.7]:
  box('village','body','window-recess',(side*2.35,-3.45,z),(1.62,.15,1.93),wood,.11)
  box('village','body','window-pane',(side*2.35,-3.56,z),(1.35,.08,1.68),window,.08)
  for x in [-.69,0,.69]:box('village','body','window-frame',(side*2.35+x,-3.63,z),(.08,.08,1.85),white,.025)
  box('village','body','window-transom',(side*2.35,-3.63,z),(1.45,.08,.08),white,.02)
  box('village','body','window-sill',(side*2.35,-3.67,z-.95),(1.9,.4,.16),sand,.06)
  for leafx in [-.52,0,.52]:ell('village','body','window-flower-leaf',(side*2.35+leafx,-3.69,z-.85),(.3,.23,.22),leaf,16,12)
 box('village','body','corner-stone',(side*3.86,-3.45,3.85),(.28,.25,6.4),sand,.06)
box('village','body','shop-door',(0,-3.48,1.95),(1.55,.16,3.3),wood,.12)
box('village','body','door-glass',(0,-3.59,2.43),(1.15,.05,1.75),window,.1)
ell('village','body','door-handle',(.51,-3.66,1.7),(.08,.08,.08),gold,16,12)
for stripe in range(12):
 x=-3.85+stripe*.7;awning=box('village','body','awning-stripe',(x,-4.0,4.0),(.7,1.65,.15),rose if stripe%2 else white,.04);awning.rotation_euler.x=-.18
 box('village','body','awning-valance',(x,-4.8,3.65),(.7,.13,.45),rose if stripe%2 else white,.06)
for side in [-1,1]:
 for k in range(5):box('village','body','roof-tile',(side*(.45+k*.77),0,9.25-k*.4),(.82,8,.12),rose,.055).rotation_euler.y=side*.48
for k in range(12):tube('village','body','roof-ridge',[(0,-3.9+k*.7,9.65),(.12,-3.9+k*.7,9.58)],.11,rose)
text('village','body','shop-sign','MUSHROOM MARKET',(0,-3.64,4.85),.38,wood)
box('village','body','shop-sign-board',(0,-3.55,4.85),(5.6,.12,.7),sand,.07)
# Paint vertex color deliberately, before UV baking: warm skin and restrained fabric variation.
for asset,objects in assets.items():
 for o in objects:
  bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.select_set(False)
  m=o.data.materials[0];base=rgb(palette[m.name][0]);attr=o.data.color_attributes.new(name='paint',type='FLOAT_COLOR',domain='CORNER')
  for loop in o.data.loops:
   p=o.matrix_world@o.data.vertices[loop.vertex_index].co;factor=.96+.04*sin(p.z*2.3)
   if m in [red,denim]:factor*=1-.025*(.5+.5*sin(p.x*140)*sin(p.z*140))
   color=Vector(base)*factor
   if m==skin and o.name.startswith('mario-sculpted-face'):
    local=p-H;blush=.1*exp(-((abs(local.x)-.18)/.07)**2-((local.z+.075)/.065)**2) if local.y<0 else 0;color=color.lerp(Vector(rgb(0xf3957c)),blush)
   attr.data[loop.index].color=(*color,1)
# Keep winding consistent and UV unwrap the complete asset as one packed atlas.
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=8;scene.render.bake.margin=5
result={}
for asset,objects in assets.items():
 copies={}
 for o in objects:
  original=o.data.materials[0]
  if original not in copies:
   copies[original]=original.copy();copies[original].name=asset+'-'+original.name
  o.data.materials[0]=copies[original]
 for o in bpy.context.scene.objects:o.select_set(False);o.hide_render=o not in objects
 for o in objects:o.select_set(True)
 bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.normals_make_consistent(inside=False);bpy.ops.uv.smart_project(angle_limit=math.radians(66),island_margin=.014);bpy.ops.object.mode_set(mode='OBJECT')
 size=1024 if asset=='mario' else 512;images={};baked_images={}
 for name,bake in [('color','DIFFUSE'),('ao','AO'),('roughness','ROUGHNESS')]:
  image=bpy.data.images.new(asset+'-'+name,width=size,height=size,alpha=False);image.colorspace_settings.name='sRGB' if name=='color' else 'Non-Color'
  for m in set(o.data.materials[0] for o in objects):
   for n in m.node_tree.nodes:n.select=False
   node=m.node_tree.nodes.new('ShaderNodeTexImage');node.image=image;node.select=True;m.node_tree.nodes.active=node
  if bake=='DIFFUSE':bpy.ops.object.bake(type=bake,pass_filter={'COLOR'},use_clear=False)
  else:bpy.ops.object.bake(type=bake,use_clear=False)
  path=os.path.join(ROOT,'public/hero-assets',asset+'-'+name+'.png');image.filepath_raw=path;image.file_format='PNG';image.save();image.pack()
  baked_images[name]=image
  png=base64.b64encode(open(path,'rb').read()).decode()
  thumb=image.copy();thumb.scale(64,64);pixels=array.array('B')
  # DataTexture rows start at the bottom, matching glTF UVs and Blender image pixels.
  for i,c in enumerate(thumb.pixels):
   if name=='color' and i%4!=3:c=12.92*c if c<=.0031308 else 1.055*max(0,c)**(1/2.4)-.055
   pixels.append(max(0,min(255,round(c*255))))
  images[name]={'png':'data:image/png;base64,'+png,'pixels':base64.b64encode(pixels.tobytes()).decode(),'size':64};bpy.data.images.remove(thumb)
 for m in copies.values():
  nodes=m.node_tree.nodes;links=m.node_tree.links;p=nodes.get('Principled BSDF')
  for channel,input_name in [('color','Base Color'),('roughness','Roughness')]:
   node=nodes.new('ShaderNodeTexImage');node.name='Baked '+channel;node.image=baked_images[channel];links.new(node.outputs['Color'],p.inputs[input_name])
 output=[];material_defs={};position_scale=1024 if asset=='village' else 16384
 for o in objects:
  evaluated=o.evaluated_get(bpy.context.evaluated_depsgraph_get());data=evaluated.to_mesh();data.calc_loop_triangles();p=array.array('h');n=array.array('b');uv=array.array('H');index=array.array('H');lookup={};role=o['role'];origin=H if role in ['head','eyeL','eyeR'] else Vector((0,0,0))
  for tri in data.loop_triangles:
   for li in tri.loops:
    loop=data.loops[li];v=o.matrix_world@data.vertices[loop.vertex_index].co-origin;normal=o.matrix_world.to_3x3()@data.vertices[loop.vertex_index].normal;t=data.uv_layers.active.data[li].uv
    key=(loop.vertex_index,round(t.x,6),round(t.y,6))
    if key not in lookup:
     lookup[key]=len(p)//3;p.extend(round(c*position_scale) for c in (v.x,v.z,-v.y));n.extend(max(-127,min(127,round(c*127))) for c in (normal.x,normal.z,-normal.y));uv.extend(max(0,min(65535,round(c*65535))) for c in t)
    index.append(lookup[key])
  material=o.data.materials[0];material_defs[material.name]={'roughness':material['roughness'],'metalness':material['metalness']}
  enc=lambda a:base64.b64encode(a.tobytes()).decode();output.append({'name':o.name,'role':role,'p':enc(p),'n':enc(n),'uv':enc(uv),'i':enc(index),'material':material.name});evaluated.to_mesh_clear()
 result[asset]={'parts':output,**images,'materials':material_defs,'positionScale':position_scale};print('EXPORTED',asset,len(output),'parts',flush=True)
# Retain complete source plus portable GLB exports. Baking is reproducible from this script.
for o in bpy.context.scene.objects:o.hide_render=False;o.select_set(False)
json.dump(result,open('web/kart/game/hero-assets.json','w'),separators=(',',':'))
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'art-source/hero-slice.blend'),compress=True)
for asset,objects in assets.items():
 for o in bpy.context.scene.objects:o.select_set(False)
 for o in objects:o.select_set(True)
 bpy.ops.export_scene.gltf(filepath=os.path.join(ROOT,'public/hero-assets',asset+'.glb'),use_selection=True,export_format='GLB',export_materials='EXPORT')
json.dump(result,open('web/kart/game/hero-assets.json','w'),separators=(',',':'))
print('Hero art slice complete',flush=True)
