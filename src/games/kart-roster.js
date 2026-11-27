// Stable IDs keep existing rooms and phone selections compatible.
// This roster supplies both the server menus and the TV race.
export const DRIVERS = [
  { id: 'tabby', name: 'Luigi', color: '#20A747', topper: 'cat', spd: 3, acc: 4, hnd: 4 },
  { id: 'bunbun', name: 'Daisy', color: '#FFBB21', topper: 'bunny', spd: 2, acc: 5, hnd: 5 },
  { id: 'duke', name: 'Bowser', color: '#E9A52D', topper: 'crown', spd: 5, acc: 2, hnd: 3 },
  { id: 'rex', name: 'Yoshi', color: '#26B950', topper: 'horns', spd: 5, acc: 3, hnd: 2 },
  { id: 'lulu', name: 'Peach', color: '#F27BB4', topper: 'bow', spd: 3, acc: 5, hnd: 4 },
  { id: 'zippy', name: 'Toad', color: '#3478D8', topper: 'antenna', spd: 4, acc: 4, hnd: 3 },
  { id: 'ace', name: 'Mario', color: '#E22C30', topper: 'cap', spd: 4, acc: 3, hnd: 4 },
  { id: 'grizz', name: 'Donkey Kong', color: '#74391C', topper: 'bear', spd: 5, acc: 2, hnd: 2 },
];

export function resolveDriver(driver, topper) {
  return DRIVERS.find(d => d.id === driver) || DRIVERS.find(d => d.topper === topper) || DRIVERS.find(d => d.id === 'ace');
}
