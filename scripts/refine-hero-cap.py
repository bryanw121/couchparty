"""Conform the cap patch and embroidery to the crown; refresh their occlusion bake."""
import bpy,math,os
from mathutils import Vector
H=Vector((0,.14,1.05))
def front(x,z):return -.02+.302*math.sqrt(max(.002,1-(x/.342)**2-((z-.23)/.185)**2))
patch=bpy.data.objects.get('cap-white-patch');emblem=bpy.data.objects.get('cap-M')
for v in patch.data.vertices:
 world=patch.matrix_world@v.co;world.y=H.y-front(world.x,world.z-H.z)-.001+.003*(v.co.y/.014);v.co=patch.matrix_world.inverted()@world
patch.data.update()
for v in emblem.data.vertices:
 world=emblem.matrix_world@v.co;world.y=H.y-front(world.x,world.z-H.z)-.006;v.co=emblem.matrix_world.inverted()@world
emblem.data.update()
objects=[o for o in bpy.context.scene.objects if o.get('asset')=='mario'];image=bpy.data.images.get('mario-ao')
for o in bpy.context.scene.objects:o.select_set(False);o.hide_render=o not in objects
for o in objects:
 o.select_set(True)
 for m in o.data.materials:
  node=m.node_tree.nodes.new('ShaderNodeTexImage');node.image=image;m.node_tree.nodes.active=node
bpy.context.view_layer.objects.active=objects[0];bpy.context.scene.cycles.samples=8;bpy.ops.object.bake(type='AO',use_clear=False);image.filepath_raw=os.path.abspath('public/hero-assets/mario-ao.png');image.file_format='PNG';image.save();image.pack()
for o in bpy.context.scene.objects:o.hide_render=False
bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath('art-source/hero-slice.blend'),compress=True)
