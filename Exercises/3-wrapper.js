'use strict';

const contract = (fn, ...types) => {
  return (...args) => {
    const expectedArgTypes = types.slice(0, -1); 
    const expectedReturnType = types[types.length - 1]; 

    args.forEach((arg, i) => {
      const expectedType = expectedArgTypes[i];
      if (!(expectedType && arg != null && arg.constructor === expectedType)) {
        throw new TypeError(
          `Argument ${i + 1} expected type ${expectedType.name}, got ${arg === null ? 'null' : typeof arg}`
        );
      }
    });

    const result = fn(...args);

    if (!(result != null && result.constructor === expectedReturnType)) {
      throw new TypeError(
        `Return value expected type ${expectedReturnType.name}, got ${result === null ? 'null' : typeof result}`
      );
    }

    return result;
  };
};

module.exports = { contract };
