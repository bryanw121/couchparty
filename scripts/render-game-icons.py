"""Physically rendered menu portraits/HUD icons from the runtime mesh export.
These are offline UI artwork; /kart-art uses the actual WebGL race renderer.
"""
import bpy,json,array,base64,os,sys
from mathutils import Vector
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
kind='character' if '--portraits' in sys.argv else 'item';models=[o for o in json.load(open('dist/art-scenes.json')) if o['kind']==kind];materials={}
def decode(text,kind):
 a=array.array(kind);a.frombytes(base64.b64decode(text));return a
for model in models:
 model['objects']=[];model['bounds']=[]
 for j,part in enumerate(model['meshes']):
  p=decode(part['position'],'f');n=decode(part['normal'],'f');idx=decode(part['index'],'I');vertices=[(p[i],-p[i+2],p[i+1]) for i in range(0,len(p),3)];model['bounds'].extend(vertices)
  mesh=bpy.data.meshes.new(model['name']);mesh.from_pydata(vertices,[],[idx[i:i+3] for i in range(0,len(idx),3)]);mesh.update()
  for poly in mesh.polygons:poly.use_smooth=True
  mesh.normals_split_custom_set_from_vertices([(n[i],-n[i+2],n[i+1]) for i in range(0,len(n),3)])
  obj=bpy.data.objects.new(model['name']+str(j),mesh);bpy.context.collection.objects.link(obj);model['objects'].append(obj);obj.hide_render=True
  key=tuple(part['color'])+(part['roughness'],part['metalness'],part['opacity'])
  if key not in materials:
   mat=bpy.data.materials.new('satin');mat.use_nodes=True;node=mat.node_tree.nodes.get('Principled BSDF');node.inputs['Base Color'].default_value=(*part['color'],1);node.inputs['Roughness'].default_value=part['roughness'];node.inputs['Metallic'].default_value=part['metalness'];node.inputs['Coat Weight'].default_value=.2;node.inputs['Coat Roughness'].default_value=.4
   if part['opacity']<1:node.inputs['Transmission Weight'].default_value=.35;node.inputs['IOR'].default_value=1.3
   materials[key]=mat
  mesh.materials.append(materials[key])
def area(location,power,size,color):
 data=bpy.data.lights.new('Softbox','AREA');data.energy=power;data.shape='DISK';data.size=size;data.color=color;obj=bpy.data.objects.new('Softbox',data);bpy.context.collection.objects.link(obj);obj.location=location;obj.rotation_euler=(Vector((0,0,.8))-obj.location).to_track_quat('-Z','Y').to_euler()
area((-3,-4,6),450,4,(1,.94,.86));area((4,-1,3),300,4,(.78,.88,1));area((0,4,5),650,3,(1,.97,.9))
scene=bpy.context.scene;scene.world.use_nodes=True;scene.world.node_tree.nodes.get('Background').inputs[0].default_value=(.055,.08,.14,1);scene.world.node_tree.nodes.get('Background').inputs[1].default_value=.5
camera=bpy.data.cameras.new('Camera');obj=bpy.data.objects.new('Camera',camera);bpy.context.collection.objects.link(obj);scene.camera=obj;camera.type='ORTHO'
scene.render.engine='CYCLES';scene.cycles.samples=32;scene.cycles.use_denoising=True;scene.view_settings.view_transform='AgX';scene.render.film_transparent=kind=='item';scene.render.resolution_x=320 if kind=='character' else 256;scene.render.resolution_y=scene.render.resolution_x;scene.render.resolution_percentage=100
out='public/kart-portraits' if kind=='character' else 'public/item-previews';os.makedirs(out,exist_ok=True)
for model in models:
 for o in model['objects']:o.hide_render=False
 if kind=='character':target=Vector((0,0,1.16));camera.ortho_scale=1.26;obj.location=(.85,-3.5,1.24)
 else:
  lo=Vector(tuple(min(p[i] for p in model['bounds']) for i in range(3)));hi=Vector(tuple(max(p[i] for p in model['bounds']) for i in range(3)));target=(lo+hi)/2;camera.ortho_scale=max(hi-lo)*1.4;obj.location=target+Vector((1.4,-4,1.8))
 obj.rotation_euler=(target-obj.location).to_track_quat('-Z','Y').to_euler();scene.render.filepath=os.path.abspath(out+'/'+model['id']+'.png');bpy.ops.render.render(write_still=True)
 for o in model['objects']:o.hide_render=True
 print('RENDERED',kind,model['name'],flush=True)
