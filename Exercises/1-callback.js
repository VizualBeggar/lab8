'use strict';

const iterate = (obj, callback) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      callback(key, obj[key], obj);
    }
  }
};

module.exports = { iterate };
