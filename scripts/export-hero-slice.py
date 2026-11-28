"""Re-export the editable baked .blend without repeating texture bakes."""
import bpy,json,array,base64,os,tempfile
from mathutils import Vector
root=os.getcwd();os.makedirs('dist/blender-temp',exist_ok=True);tempfile.tempdir=os.path.join(root,'dist/blender-temp')
assets={}
for o in bpy.context.scene.objects:
 if o.type=='MESH' and 'asset' in o:assets.setdefault(o['asset'],[]).append(o)
result={};H=Vector((0,.14,1.05))
for asset,objects in assets.items():
 images={}
 for name in ['color','ao','roughness']:
  image=bpy.data.images.get(asset+'-'+name);path=os.path.join(root,'public/hero-assets',asset+'-'+name+'.png')
  thumb=image.copy();thumb.scale(64,64);pixels=array.array('B')
  for i,c in enumerate(thumb.pixels):
   if name=='color' and i%4!=3:c=12.92*c if c<=.0031308 else 1.055*max(0,c)**(1/2.4)-.055
   pixels.append(max(0,min(255,round(c*255))))
  images[name]={'png':'data:image/png;base64,'+base64.b64encode(open(path,'rb').read()).decode(),'pixels':base64.b64encode(pixels.tobytes()).decode(),'size':64};bpy.data.images.remove(thumb)
 parts=[];material_defs={};scale=1024 if asset=='village' else 16384
 for o in objects:
  data=o.data;data.calc_loop_triangles();p=array.array('h');n=array.array('b');uv=array.array('H');idx=array.array('H');lookup={};role=o['role'];origin=H if role in ['head','eyeL','eyeR'] else Vector((0,0,0))
  for tri in data.loop_triangles:
   for li in tri.loops:
    loop=data.loops[li];v=o.matrix_world@data.vertices[loop.vertex_index].co-origin;normal=o.matrix_world.to_3x3()@data.vertices[loop.vertex_index].normal;t=data.uv_layers.active.data[li].uv;key=(loop.vertex_index,round(t.x,6),round(t.y,6))
    if key not in lookup:
     lookup[key]=len(p)//3;p.extend(round(c*scale) for c in (v.x,v.z,-v.y));n.extend(max(-127,min(127,round(c*127))) for c in (normal.x,normal.z,-normal.y));uv.extend(max(0,min(65535,round(c*65535))) for c in t)
    idx.append(lookup[key])
  m=o.data.materials[0];material_defs[m.name]={'roughness':m['roughness'],'metalness':m['metalness']};enc=lambda a:base64.b64encode(a.tobytes()).decode();parts.append({'name':o.name,'role':role,'p':enc(p),'n':enc(n),'uv':enc(uv),'i':enc(idx),'material':m.name})
 result[asset]={'parts':parts,**images,'materials':material_defs,'positionScale':scale}
json.dump(result,open('web/kart/game/hero-assets.json','w'),separators=(',',':'))
for asset,objects in assets.items():
 for o in bpy.context.scene.objects:o.select_set(False)
 for o in objects:o.select_set(True)
 bpy.ops.export_scene.gltf(filepath=os.path.join(root,'public/hero-assets',asset+'.glb'),use_selection=True,export_format='GLB',export_materials='EXPORT')
print('Exported all 5 hero assets and baked atlases',flush=True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(root,'art-source/hero-slice.blend'),compress=True)
