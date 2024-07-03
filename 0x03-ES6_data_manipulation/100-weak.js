export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  const endpointKey = `${endpoint.protocol}://${endpoint.name}`;

  if (weakMap.has(endpointKey)) {
    const queryCount = weakMap.get(endpointKey) + 1;
    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpointKey, queryCount);
  } else {
    weakMap.set(endpointKey, 1);
  }

  return `${endpoint.protocol}://${endpoint.name}`;
}
