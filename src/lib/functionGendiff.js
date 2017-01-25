// @flow

export default (firstObject, secondObject) => {
  const result = {};
  Object.keys(firstObject).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(secondObject, key)) {
      if (firstObject[key] !== secondObject[key]) {
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

