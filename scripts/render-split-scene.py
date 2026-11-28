"""Offline Blender lighting study, using exported runtime geometry and cameras.
This is not a browser screenshot; Three.js materials/tone mapping differ.
"""
import bpy,json,base64,array,os,math,tempfile
from mathutils import Matrix,Vector,Quaternion
tempfile.tempdir=os.path.abspath('dist/blender-temp');os.makedirs(tempfile.tempdir,exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
data=json.load(open('dist/split-scene.json'));convert=Matrix(((1,0,0,0),(0,0,-1,0),(0,1,0,0),(0,0,0,1)))
def decode(s,kind='f'):
 a=array.array(kind);a.frombytes(base64.b64decode(s));return a
def image_node(m,entry,color=True):
 node=m.node_tree.nodes.new('ShaderNodeTexImage');node.image=bpy.data.images.load(os.path.abspath(entry['file']),check_existing=True)
 node.image.colorspace_settings.name='sRGB' if color else 'Non-Color'
 uv=m.node_tree.nodes.new('ShaderNodeTexCoord');mapping=m.node_tree.nodes.new('ShaderNodeVectorMath');mapping.operation='MULTIPLY_ADD'
 mapping.inputs[1].default_value=(entry['repeat'][0],entry['repeat'][1]*(1 if entry.get('flipY',True) else -1),1)
 mapping.inputs[2].default_value=(0,0 if entry.get('flipY',True) else 1,0)
 m.node_tree.links.new(uv.outputs['UV'],mapping.inputs[0]);m.node_tree.links.new(mapping.outputs[0],node.inputs['Vector']);return node
materials=[]
for entry in data['materials']:
 m=bpy.data.materials.new('Runtime material '+str(entry['id']));m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*entry['color'],1)
 p.inputs['Roughness'].default_value=entry['roughness'];p.inputs['Metallic'].default_value=entry['metalness'];p.inputs['Coat Weight'].default_value=entry['clearcoat'];p.inputs['Coat Roughness'].default_value=.22
 p.inputs['Emission Color'].default_value=(*entry['emissive'],1);p.inputs['Emission Strength'].default_value=entry['emit'];p.inputs['Alpha'].default_value=entry.get('opacity',1)
 base=None
 if entry.get('atlas'):
  for channel,target in [('color','Base Color'),('roughness','Roughness')]:
   node=image_node(m,{'file':'public/hero-assets/'+entry['atlas']+'-'+channel+'.png','repeat':[1,1]},channel=='color');m.node_tree.links.new(node.outputs['Color'],p.inputs[target])
 elif entry.get('map'):
  base=image_node(m,entry['map']);mix=m.node_tree.nodes.new('ShaderNodeMixRGB');mix.blend_type='MULTIPLY';mix.inputs[0].default_value=1;mix.inputs[2].default_value=(*entry['color'],1)
  m.node_tree.links.new(base.outputs['Color'],mix.inputs[1]);m.node_tree.links.new(mix.outputs[0],p.inputs['Base Color']);m.node_tree.links.new(base.outputs['Alpha'],p.inputs['Alpha'])
 if entry.get('roughnessMap'):
  node=image_node(m,entry['roughnessMap'],False);m.node_tree.links.new(node.outputs['Color'],p.inputs['Roughness'])
 if entry.get('normalMap'):
  detail=image_node(m,entry['normalMap'],False);normal=m.node_tree.nodes.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=entry.get('normalScale',[.2])[0];m.node_tree.links.new(detail.outputs['Color'],normal.inputs['Color']);m.node_tree.links.new(normal.outputs['Normal'],p.inputs['Normal'])
 if entry.get('vertexColors'):
  node=m.node_tree.nodes.new('ShaderNodeVertexColor');node.layer_name='RuntimeColor';m.node_tree.links.new(node.outputs['Color'],p.inputs['Base Color'])
 if entry['basic']:
  emission=m.node_tree.nodes.new('ShaderNodeEmission');emission.inputs['Color'].default_value=(*entry['color'],1)
  if entry.get('vertexColors'):m.node_tree.links.new(node.outputs['Color'],emission.inputs['Color'])
  elif base:m.node_tree.links.new(base.outputs['Color'],emission.inputs['Color'])
  m.node_tree.links.new(emission.outputs[0],m.node_tree.nodes.get('Material Output').inputs['Surface'])
 materials.append(m)
geometries=[]
for entry in data['geometries']:
 raw=decode(entry['position']);idx=decode(entry['index'],'I');mesh=bpy.data.meshes.new('Geometry '+str(entry['id']));mesh.from_pydata([raw[i:i+3] for i in range(0,len(raw),3)],[],[idx[i:i+3] for i in range(0,len(idx),3)]);mesh.update()
 normals=decode(entry['normal']);mesh.normals_split_custom_set_from_vertices([normals[i:i+3] for i in range(0,len(normals),3)])
 for poly in mesh.polygons:poly.use_smooth=True
 if entry.get('uv'):
  raw=decode(entry['uv']);layer=mesh.uv_layers.new(name='UVMap')
  for loop in mesh.loops:layer.data[loop.index].uv=raw[loop.vertex_index*2:loop.vertex_index*2+2]
 if entry.get('color'):
  raw=decode(entry['color']);layer=mesh.color_attributes.new(name='RuntimeColor',type='FLOAT_COLOR',domain='POINT')
  for i,c in enumerate(layer.data):c.color=(*raw[i*3:i*3+3],1)
 geometries.append(mesh)
for entry in data['objects']:
 mesh=geometries[entry['geometry']]
 if not mesh.materials:
  for mid in entry['material']:mesh.materials.append(materials[mid])
  for i,group in enumerate(data['geometries'][entry['geometry']]['groups']):
   for p in mesh.polygons[group['start']//3:(group['start']+group['count'])//3]:p.material_index=group['materialIndex']
 obj=bpy.data.objects.new(entry['name'] or 'Runtime mesh',mesh);bpy.context.collection.objects.link(obj);v=entry['matrix'];obj.matrix_world=convert@Matrix([[v[c*4+r] for c in range(4)] for r in range(4)])
 if entry['name']=='sky-dome':obj.visible_shadow=False;obj.visible_diffuse=False;obj.visible_glossy=False
 # Shared Three geometry can have different object materials.
 for i,mid in enumerate(entry['material']):obj.material_slots[i].link='OBJECT';obj.material_slots[i].material=materials[mid]
scene=bpy.context.scene;scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs['Color'].default_value=(.3,.55,.85,1);scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value=.35
sun=bpy.data.lights.new('Course sunlight','SUN');sun.energy=2.2;sun.angle=math.radians(4);sun.color=(1,.95,.85);obj=bpy.data.objects.new('Course sunlight',sun);bpy.context.collection.objects.link(obj);obj.location=convert@Vector((-250,390,230));obj.rotation_euler=(-obj.location).to_track_quat('-Z','Y').to_euler()
scene.render.engine='CYCLES';scene.cycles.samples=12;scene.cycles.use_denoising=True;scene.render.resolution_x=960;scene.render.resolution_y=540;scene.render.resolution_percentage=100
scene.view_settings.view_transform='Standard';scene.view_settings.look='Medium High Contrast';scene.view_settings.exposure=-.45
camera=bpy.data.cameras.new('Runtime race camera');obj=bpy.data.objects.new('Runtime race camera',camera);bpy.context.collection.objects.link(obj);scene.camera=obj;camera.clip_end=1200;camera.lens_unit='FOV';camera.sensor_fit='HORIZONTAL'
os.makedirs('dist/split-renders',exist_ok=True)
for i,entry in enumerate(data['cameras']):
 q=entry['quaternion'];matrix=Quaternion((q[3],q[0],q[1],q[2])).to_matrix().to_4x4();matrix.translation=Vector(entry['position']);obj.matrix_world=convert@matrix
 # Three.js specifies vertical FOV; Blender horizontal sensor fit needs horizontal FOV.
 camera.angle=2*math.atan(math.tan(math.radians(entry['fov'])/2)*16/9)
 scene.render.filepath=os.path.abspath('dist/split-renders/player-'+str(i+1)+'.png');bpy.ops.render.render(write_still=True)
print('Rendered four offline race-camera views. These approximate the browser lighting.')
