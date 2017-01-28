// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */

const getData = (data) => {
  if (typeof data !== 'object') {
    return data;
  }
  return Object.keys(data).reduce((acc, key) => {
    acc[`  ${key}`] = data[key];
    return acc;
  }, {});
};
const toString = (obj) => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const currentObj = obj[key];
    if (currentObj.type === 'updated') {
      acc[`+ ${key}`] = currentObj.data;
      acc[`- ${key}`] = currentObj.previous;
    } else if (currentObj.type === 'added') {
      acc[`+ ${key}`] = getData(currentObj.data);
    } else if (currentObj.type === 'object') {
      acc[`  ${key}`] = toString(currentObj.data);
    } else if (currentObj.type === 'removed') {
      acc[`- ${key}`] = getData(currentObj.data);
    } else if (currentObj.type === 'unchanged') {
      acc[`  ${key}`] = currentObj.data;
    }
    return acc;
  }, {});
  return result;
};

export default obj => JSON.stringify(toString(obj), null, 2).replace(/,/g, '');

