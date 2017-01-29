// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */
import lodash from 'lodash';

const toJson = (obj) => {
  const result = lodash.flatten(obj).reduce((acc, currentObj) => {
    const typeVal = currentObj.type;
    const value = typeVal === 'object' ? toJson(currentObj.data) : currentObj.data;
    const res = {
      name: currentObj.name,
      type: typeVal,
      data: value,
    };
    if (typeVal === 'updated') res.previous = currentObj.previous;
    acc.push(res);
    return acc;
  }, []);
  return result;
};

export default diff => JSON.stringify(toJson(diff), null, '  ');

