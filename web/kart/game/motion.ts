// Exponential response keeps tuning consistent at different rendering rates.
export const response = (rate: number, delta: number) => 1 - Math.exp(-rate * Math.max(0, delta));
export const angleDifference = (target: number, current: number) => Math.atan2(Math.sin(target-current), Math.cos(target-current));
