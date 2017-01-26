// @flow

const compareObjects = (firstObject, secondObject) => {
  const result = {};
  Object.keys(firstObject).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(secondObject, key)) {
      if (firstObject[key] instanceof Object) {
        result[`  ${key}`] = compareObjects(firstObject[key], secondObject[key]);
      } else if (firstObject[key] !== secondObject[key]) {
        result[`+ ${key}`] = secondObject[key];
        result[`- ${key}`] = firstObject[key];
      } else {
        result[`  ${key}`] = firstObject[key];
      }
    } else {
      result[`- ${key}`] = firstObject[key];
    }
  });
  Object.keys(secondObject).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(firstObject, key)) {
      result[`+ ${key}`] = secondObject[key];
    }
  });
  return result;
};

export default compareObjects;

