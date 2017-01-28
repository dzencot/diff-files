// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */

const toJson = (obj) => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const currentObj = obj[key];
    const typeVal = currentObj.type;
    const value = typeVal === 'object' ? toJson(currentObj.data) : currentObj.data;
    const res = {
      type: typeVal,
      data: value,
    };
    if (typeVal === 'updated') res.previous = currentObj.previous;
    acc[key] = res;
    return acc;
  }, {});
  return result;
};

export default diff => JSON.stringify(toJson(diff), null, '  ');

