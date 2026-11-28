"""Keep surface-painted mushroom spots within the cap's lower edge."""
import bpy,os,math
for o in bpy.context.scene.objects:
 if o.type!='MESH' or o.get('asset')!='mushroom' or not o.name.startswith('mushroom-white-spot'):continue
 for v in o.data.vertices:
  qx=v.co.x/.704;qy=v.co.y/.704;qz=(v.co.z-.65)/.634
  if qz<.005:
   qz=.005;length=math.sqrt(qx*qx+qy*qy+qz*qz);v.co=(qx/length*.704,qy/length*.704,.65+qz/length*.634)
 o.data.update()
bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath('art-source/hero-slice.blend'),compress=True)
