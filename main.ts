const map = new Map<number, Set<number>>();
map.set(4, new Set([4]));
map.set(1, new Set([1]));
const set = map.get(4)!.add(3);
map.set(3, set);

console.log(`☕ DYNO LOG ~ main.ts:6 🥺`, map.get(4), map.get(3));
