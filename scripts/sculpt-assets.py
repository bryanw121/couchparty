"""Union intersecting clay forms, relax their joins, and produce bounded game meshes.
Run after prepare-sculpt-assets.mjs using Blender --background --python this-file.
The corrected Peach/Daisy heads are deliberately excluded from this operation.
"""
import bpy,json,base64,array,os
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
source=json.load(open('dist/sculpt-source.json'));result={}
for who,parts in source.items():
 result[who]=[]
 for part in parts:
  p=part['position'];vertices=[p[i:i+3] for i in range(0,len(p),3)];faces=[(i,i+1,i+2) for i in range(0,len(vertices),3)]
  mesh=bpy.data.meshes.new('clay');mesh.from_pydata(vertices,[],faces);mesh.update()
  obj=bpy.data.objects.new('sculpt',mesh);bpy.context.collection.objects.link(obj);bpy.context.view_layer.objects.active=obj;obj.select_set(True)
  # Weld input triangle seams before the volumetric union.
  bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.remove_doubles(threshold=.0001);bpy.ops.mesh.normals_make_consistent(inside=False);bpy.ops.object.mode_set(mode='OBJECT')
  remesh=obj.modifiers.new('Continuous sculpt','REMESH');remesh.mode='VOXEL';remesh.voxel_size=.012;remesh.use_smooth_shade=True;bpy.ops.object.modifier_apply(modifier=remesh.name)
  smooth=obj.modifiers.new('Relax sculpt joins','SMOOTH');smooth.factor=.65;smooth.iterations=5;bpy.ops.object.modifier_apply(modifier=smooth.name)
  dec=obj.modifiers.new('Game topology','DECIMATE');dec.ratio=min(1,900/max(1,len(obj.data.polygons)));bpy.ops.object.modifier_apply(modifier=dec.name)
  for poly in obj.data.polygons:poly.use_smooth=True
  obj.data.calc_loop_triangles();pos=array.array('h');normal=array.array('b');indices=array.array('H')
  for v in obj.data.vertices:
   pos.extend(round(c*16384) for c in v.co);normal.extend(round(c*127) for c in v.normal)
  for tri in obj.data.loop_triangles:
   for index in tri.vertices:
    indices.append(index)
  result[who].append({'space':part['space'],'color':part['color'],'position':base64.b64encode(pos.tobytes()).decode(),'normal':base64.b64encode(normal.tobytes()).decode(),'index':base64.b64encode(indices.tobytes()).decode()})
  print(who,part['space'],hex(part['color']),len(indices)//3,'triangles',flush=True)
  bpy.data.objects.remove(obj,do_unlink=True)
os.makedirs('web/kart/game',exist_ok=True)
json.dump(result,open('web/kart/game/sculpt-assets.json','w'),separators=(',',':'))
