// @flow

const plainer = (obj, parrent = '') => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const currentObj = obj[key];
    if (currentObj.type === 'added') {
      const value = currentObj.data instanceof Object ? 'complex value' : `value: '${currentObj.data}'`;
      return `${acc}\nProperty '${parrent}${key}' was added with ${value}`;
    } else if (currentObj.type === 'removed') {
      return `${acc}\nProperty '${parrent}${key}' was removed`;
    } else if (currentObj.type === 'updated') {
      return `${acc}\nProperty '${parrent}${key}' was updated. From '${currentObj.previous}' to '${currentObj.data}'`;
    } else if (currentObj.type === 'object') {
      const newParrent = `${parrent}${key}.`;
      return `${acc}${plainer(currentObj.data, newParrent)}`;
    }
    return acc;
  }, '');
  return result;
};

export default obj => plainer(obj).slice(1);

