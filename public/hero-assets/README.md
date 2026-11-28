# First art benchmark

These fan-art assets were authored through Blender's Python API for Kario Mart.
They emulate the requested Mario character and racing-game motifs; they were not extracted from a Nintendo game.

- `mario.glb`: shaped face, fitted eyes and cap emblem, clothing, glove fingers and shoe details.
- `kart.glb`: matching bodywork, seat, trim, lights, wing, engine and exhausts; the game retains its animated wheel assemblies.
- `mushroom.glb` and `shell.glb`: the two benchmark item models.
- `village.glb`: the first Mushroom Village shop kit.

Each has color, ambient-occlusion and roughness atlases. The editable scene is
`art-source/hero-slice.blend`, and `scripts/build-hero-slice.py` reproduces the authored meshes and bakes.
`scripts/export-hero-slice.py` re-exports source edits without rebaking unchanged textures.
The runtime bundle uses compact mesh data from `hero-assets.json` and the same baked images.
Arm/eye animation is controlled by the game's role groups; these GLBs are model exports, not standalone animation packs.

Blender renders in `public/art-review/hero-*.png` are studio asset studies, not gameplay screenshots.
The `/kart-art?view=race` page runs the actual game engine with an AI-driven Mario for camera/lighting review.
