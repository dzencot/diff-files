// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */

const toJson = (obj) => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const typeVal = key.slice(0, 1) === ' ' ? undefined : key.slice(0, 1);
    const nameKey = key.slice(2);
    const value = typeof obj[key] === 'object' && typeVal === undefined ? toJson(obj[key]) : obj[key];
    acc[nameKey] = {
      type: `'${typeVal}'`,
      data: value,
    };
    return acc;
  }, {});
  return result;
};

export default toJson;

