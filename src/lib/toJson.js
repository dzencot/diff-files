// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */

const toJson = (obj) => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const typeVal = key.slice(0, 1);
    const nameKey = key.slice(2);
    const value = typeof obj[key] === 'object' && typeVal === ' ' ? toJson(obj[key]) : obj[key];
    const res = {
      name: nameKey,
      type: typeVal,
      data: value,
    };
    acc.push(res);
    return acc;
  }, []);
  return result;
};

export default diff => JSON.stringify(toJson(diff), null, '  ');

