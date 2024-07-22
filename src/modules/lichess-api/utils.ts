import { cache } from "react";

function cacheAllFunctions<T extends Record<string, Function>>(
  functions: T
): Record<string, Function> {
  return Object.entries(functions).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: cache(value),
    };
  }, {}) as typeof functions;
}

export { cacheAllFunctions };
