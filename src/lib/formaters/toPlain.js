// @flow

import lodash from 'lodash';

const plainer = (obj, parrent = '') => {
  const result = lodash.flatten(obj).reduce((acc, currentObj) => {
    if (currentObj.type === 'added') {
      const value = currentObj.data instanceof Object ? 'complex value' : `value: '${currentObj.data}'`;
      return `${acc}\nProperty '${parrent}${currentObj.name}' was added with ${value}`;
    } else if (currentObj.type === 'removed') {
      return `${acc}\nProperty '${parrent}${currentObj.name}' was removed`;
    } else if (currentObj.type === 'updated') {
      return `${acc}\nProperty '${parrent}${currentObj.name}' was updated. From '${currentObj.previous}' to '${currentObj.data}'`;
    } else if (currentObj.type === 'object') {
      const newParrent = `${parrent}${currentObj.name}.`;
      return `${acc}${plainer(currentObj.data, newParrent)}`;
    }
    return acc;
  }, '');
  return result;
};

export default obj => plainer(obj).slice(1);

