// @flow
/* eslint arrow-body-style: ["error", "always"] */

import lodash from 'lodash';

const getDataString = (data, countTab) => {
  if (typeof data !== 'object') {
    return ` ${data}`;
  }
  const newCountTab = countTab + 1;
  const tab = lodash.repeat('  ', newCountTab);
  const result = Object.keys(data).reduce((acc, key) => {
    return `${acc}${tab}    ${key}:${getDataString(data[key], newCountTab + 1)}\n`;
  }, ' {\n');
  return `${result}${tab}}`;
};

const getObjString = (obj, countTab) => {
  const newCountTab = countTab + 1;
  const tab = lodash.repeat('  ', newCountTab);
  const result = lodash.flatten(obj).reduce((acc, currentObj) => {
    if (currentObj.type === 'unchanged') {
      return `${acc}${tab}  ${currentObj.name}:${getDataString(currentObj.data, newCountTab)}\n`;
    }
    if (currentObj.type === 'added') {
      return `${acc}${tab}+ ${currentObj.name}:${getDataString(currentObj.data, newCountTab)}\n`;
    }
    if (currentObj.type === 'removed') {
      return `${acc}${tab}- ${currentObj.name}:${getDataString(currentObj.data, newCountTab)}\n`;
    }
    if (currentObj.type === 'object') {
      return `${acc}${tab}  ${currentObj.name}: ${getObjString(currentObj.data, newCountTab + 1)}\n`;
    }
    if (currentObj.type === 'updated') {
      return `${acc}${tab}+ ${currentObj.name}:${getDataString(currentObj.data, newCountTab)}
${tab}- ${currentObj.name}:${getDataString(currentObj.previous, newCountTab)}\n`;
    }
    return acc;
  }, '{\n');
  return `${result}${lodash.repeat('  ', countTab)}}`;
};

export default (obj) => { return getObjString(obj, 0); };

