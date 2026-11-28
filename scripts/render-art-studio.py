"""Blender asset study of exported game meshes. These are NOT gameplay screenshots."""
import bpy,json,array,base64,math,os,sys
from mathutils import Vector
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
data=json.load(open('dist/art-scenes.json'));kind='character' if '--portrait' in sys.argv else 'item' if '--items' in sys.argv else 'kart';hero='--hero' in sys.argv
models=[o for o in data if o['kind']==kind and (not hero or (o['name']=='Mario' if kind!='item' else o['id'] in ['green','boost']))];materials={}
def decode(text,kind):
 a=array.array(kind);a.frombytes(base64.b64decode(text));return a
def material(color,rough,metal,opacity=1,atlas=None):
 key=tuple(color)+(rough,metal,opacity,atlas)
 if key not in materials:
  m=bpy.data.materials.new('satin');m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal;p.inputs['Coat Weight'].default_value=.18;p.inputs['Coat Roughness'].default_value=.4
  if opacity<1:p.inputs['Transmission Weight'].default_value=.3;p.inputs['IOR'].default_value=1.3
  if atlas:
   for channel,input_name in [('color','Base Color'),('roughness','Roughness')]:
    image=bpy.data.images.load(os.path.abspath('public/hero-assets/'+atlas+'-'+channel+'.png'),check_existing=True);image.colorspace_settings.name='sRGB' if channel=='color' else 'Non-Color';node=m.node_tree.nodes.new('ShaderNodeTexImage');node.image=image;m.node_tree.links.new(node.outputs['Color'],p.inputs[input_name])
  materials[key]=m
 return materials[key]
for i,model in enumerate(models):
 offset=Vector(((i-(len(models)-1)/2)*(2.6 if kind=='item' else 0),0,0)) if hero else Vector(((i%4-1.5)*(3.6 if kind=='kart' else 2.6),(i//4)*(4.3 if kind=='kart' else 2.5),0))
 for j,part in enumerate(model['meshes']):
  raw=decode(part['position'],'f');norm=decode(part['normal'],'f');idx=decode(part['index'],'I')
  vertices=[tuple(Vector((raw[k],-raw[k+2],raw[k+1]))+offset) for k in range(0,len(raw),3)]
  normals=[(norm[k],-norm[k+2],norm[k+1]) for k in range(0,len(norm),3)]
  mesh=bpy.data.meshes.new(model['name']);mesh.from_pydata(vertices,[],[idx[k:k+3] for k in range(0,len(idx),3)]);mesh.update()
  for p in mesh.polygons:p.use_smooth=True
  mesh.normals_split_custom_set_from_vertices(normals)
  if part.get('uv'):
   uv=decode(part['uv'],'f');layer=mesh.uv_layers.new(name='UVMap')
   for loop in mesh.loops:layer.data[loop.index].uv=(uv[loop.vertex_index*2],uv[loop.vertex_index*2+1])
  obj=bpy.data.objects.new(model['name']+str(j),mesh);bpy.context.collection.objects.link(obj);obj.data.materials.append(material(part['color'],part['roughness'],part['metalness'],part['opacity'],part.get('atlas')))
bpy.ops.mesh.primitive_plane_add(size=200);bpy.context.object.data.materials.append(material((.63,.78,.83),.82,0))
def area(name,location,power,size,color):
 light=bpy.data.lights.new(name,'AREA');light.energy=power;light.shape='DISK';light.size=size;light.color=color;o=bpy.data.objects.new(name,light);bpy.context.collection.objects.link(o);o.location=location;o.rotation_euler=(Vector((0,2,1))-o.location).to_track_quat('-Z','Y').to_euler()
area('Soft key',(-6,-7,12),1900,8,(1,.94,.85));area('Cool fill',(8,-1,8),1500,7,(.8,.9,1));area('Rim',(-2,10,10),2200,6,(1,.95,.9))
scene=bpy.context.scene;scene.world.color=(.35,.35,.35)
camera=bpy.data.cameras.new('Camera');obj=bpy.data.objects.new('Camera',camera);bpy.context.collection.objects.link(obj)
target=Vector((0,2.0 if kind=='kart' else 3.4,.7));obj.location=(7,-18,14) if kind=='kart' else (6,-20,23);obj.rotation_euler=(target-obj.location).to_track_quat('-Z','Y').to_euler();camera.type='ORTHO';camera.ortho_scale=16 if kind=='kart' else 14;scene.camera=obj
if hero:
 target=Vector((0,0,1.16 if kind=='character' else .72));obj.location=(.85,-3.5,1.24) if kind=='character' else (3.5,-4.6,2.7);obj.rotation_euler=(target-obj.location).to_track_quat('-Z','Y').to_euler();camera.ortho_scale=1.26 if kind=='character' else 4.1 if kind=='kart' else 6.2
 if '--rear' in sys.argv:obj.location=(3.5,4.6,2.7);obj.rotation_euler=(target-obj.location).to_track_quat('-Z','Y').to_euler()
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True;scene.render.resolution_x=1400;scene.render.resolution_y=1000 if kind=='kart' else 1400;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX';os.makedirs('public/art-review',exist_ok=True);scene.render.filepath=os.path.abspath('public/art-review/'+('hero-' if hero else '')+kind+('-rear' if '--rear' in sys.argv else '')+'-asset-study.png');bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath('dist/'+kind+'-asset-study.blend'));bpy.ops.render.render(write_still=True)
