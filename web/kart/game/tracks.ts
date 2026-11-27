// Four original courses. Every layout starts with the same straight (0,0,0) → (0,0,-80)
// so the start gantry and grandstands sit in the same place on all of them.

export interface CourseTheme {
  skyTop: number; skyMid: number; skyLow: number; fog: number;
  ground: number; trees: number[]; trunk: number; glow?: boolean;
  ambient: number; sun: number; sunColor: number; hemiSky: number;
  clouds: number; curbA: string; curbB: string; padColor: string;
}
export interface Course { id: string; name: string; points: Array<[number, number, number]>; theme: CourseTheme; shortcut?: [number, number] }

const MEADOW: Array<[number, number, number]> = [
  [0, 0, 0], [0, 0, -80], [25, 2, -140], [75, 4, -170], [130, 2, -140], [150, 0, -80], [135, -2, -20], [95, -3, 25],
  [120, -1, 75], [160, 2, 120], [140, 4, 180], [80, 2, 195], [30, 0, 160], [-35, -1, 180], [-95, 1, 150], [-140, 3, 90],
  [-150, 4, 20], [-120, 2, -50], [-70, 0, -75], [-30, 0, -35],
];

export const COURSES: Record<string, Course> = {
  meadow: {
    id: 'meadow', shortcut: [124, 158], name: 'Meadow Loop', points: MEADOW,
    theme: {
      skyTop: 0x2f8cff, skyMid: 0x7cc8ff, skyLow: 0xd8f3ff, fog: 0xd8f3ff, ground: 0x5ccf45,
      trees: [0x3ec94e, 0x2fb543, 0x7ad94a, 0x52d17a, 0xff9ccd, 0xffd166], trunk: 0x9a5b2c,
      ambient: 0.85, sun: 1.7, sunColor: 0xfff4e0, hemiSky: 0xbfe3ff, clouds: 0xffffff,
      curbA: '#ef4444', curbB: '#ffffff', padColor: '#ff7a00',
    },
  },
  sunset: {
    id: 'sunset', shortcut: [124, 158], name: 'Sunset Bay',
    // mirror image of the meadow layout with rolling dunes
    points: MEADOW.map(([x, y, z], i) => [-x, y * 1.6 + (i % 3 === 0 ? 1.5 : 0), z]),
    theme: {
      skyTop: 0x4b3aa8, skyMid: 0xff8a5c, skyLow: 0xffd59e, fog: 0xffc9a0, ground: 0xf0cf86,
      trees: [0x2ec4a6, 0x26a69a, 0x7bd389, 0xff9f43], trunk: 0xa0673a,
      ambient: 0.8, sun: 1.6, sunColor: 0xffb27a, hemiSky: 0xffc2a0, clouds: 0xffe0d0,
      curbA: '#ff7a00', curbB: '#fff3d6', padColor: '#ff3b8d',
    },
  },
  frosty: {
    id: 'frosty', shortcut: [220, 262], name: 'Frosty Peaks',
    points: [
      [0, 0, 0], [0, 0, -80], [-20, 3, -130], [-70, 6, -150], [-120, 5, -120], [-130, 3, -60], [-90, 1, -20], [-60, 0, 30],
      [-100, 2, 80], [-80, 5, 140], [-20, 7, 160], [40, 5, 130], [60, 2, 80], [110, 0, 60], [150, 2, 10], [140, 4, -60],
      [100, 2, -90], [60, 0, -60], [40, 0, -10], [10, 0, 40],
    ],
    theme: {
      skyTop: 0x6aa9e8, skyMid: 0xbfe3ff, skyLow: 0xf2fbff, fog: 0xeaf6ff, ground: 0xf4f8ff,
      trees: [0xe8f4ff, 0x9fd8c8, 0x7fb8d8, 0xcfe8ff], trunk: 0x7a5a44,
      ambient: 0.95, sun: 1.4, sunColor: 0xeaf4ff, hemiSky: 0xffffff, clouds: 0xffffff,
      curbA: '#3b82f6', curbB: '#ffffff', padColor: '#00b4ff',
    },
  },
  neon: {
    id: 'neon', shortcut: [166, 186], name: 'Neon Night',
    points: [
      [0, 0, 0], [0, 0, -80], [10, 2, -150], [60, 4, -190], [120, 3, -170], [140, 1, -110], [110, 0, -60], [130, -1, 0],
      [180, 1, 40], [170, 3, 110], [110, 4, 140], [50, 2, 110], [20, 0, 140], [-40, 1, 170], [-110, 3, 150], [-150, 4, 90],
      [-130, 2, 30], [-90, 1, -10], [-40, 0, 30], [-10, 0, 40],
    ],
    theme: {
      skyTop: 0x07071f, skyMid: 0x241a5e, skyLow: 0x6b2fa3, fog: 0x2a1b5e, ground: 0x1d2b5a,
      trees: [0xff4fd8, 0x29e7ff, 0xa66bff, 0x5cff9d], trunk: 0x3a2f6b, glow: true,
      ambient: 0.55, sun: 0.9, sunColor: 0xb9a8ff, hemiSky: 0x6b5bff, clouds: 0x4a3d8f,
      curbA: '#ff2fd0', curbB: '#2a2a5a', padColor: '#29e7ff',
    },
  },
};

export function courseById(id?: string): Course { return COURSES[id || 'meadow'] || COURSES.meadow; }
