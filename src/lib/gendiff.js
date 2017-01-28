// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */

const compareObjects = (firstObject, secondObject) => {
  const result = Object.keys(firstObject).reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(secondObject, key)) {
      if (firstObject[key] instanceof Object) {
        acc[key] = {
          type: 'object',
          data: compareObjects(firstObject[key], secondObject[key]),
        };
      } else if (firstObject[key] !== secondObject[key]) {
        acc[key] = {
          type: 'updated',
          data: secondObject[key],
          previous: firstObject[key],
        };
      } else {
        acc[key] = {
          type: 'unchanged',
          data: firstObject[key],
        };
      }
    } else {
      acc[key] = {
        type: 'removed',
        data: firstObject[key],
      };
    }
    return acc;
  }, {});
  return Object.keys(secondObject).reduce((acc, key) => {
    if (!Object.prototype.hasOwnProperty.call(firstObject, key)) {
      acc[key] = {
        type: 'added',
        data: secondObject[key],
      };
    }
    return acc;
  }, result);
};

export default compareObjects;

