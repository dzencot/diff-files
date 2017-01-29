// @flow
/* eslint no-use-before-define: ["error", { "functions": false }] */

import lodash from 'lodash';

const getComparedData = (data1, data2) => {
  if (data1 === data2) {
    return {
      type: 'unchanged',
      data: data1,
    };
  }
  if (!data1) {
    return {
      type: 'added',
      data: data2,
    };
  }
  if (!data2) {
    return {
      type: 'removed',
      data: data1,
    };
  }
  if (typeof data1 === 'object') {
    return {
      type: 'object',
      data: getDiff(data1, data2),
    };
  }
  return {
    type: 'updated',
    data: data2,
    previous: data1,
  };
};

function getDiff(firstObject, secondObject) {
  const diffUnion = lodash.union(lodash.keys(firstObject), lodash.keys(secondObject));
  const diff = diffUnion.reduce((acc, key) => {
    const res = getComparedData(firstObject[key], secondObject[key]);
    res.name = key;
    acc.push(res);
    return acc;
  }, []);
  return diff;
}
export default getDiff;

