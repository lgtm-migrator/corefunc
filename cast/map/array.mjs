export function castMapToArray(map) {
  return Array.from(map).map(([, val]) => val);
}
