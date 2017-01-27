// @flow

const plainer = (obj, parrent = '') => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const type = key.slice(0, 1);
    const key1 = key.slice(2);
    if (type === '+') {
      const previous = `- ${key1}`;
      if (obj.hasOwnProperty.call(obj, previous)) {
        return `${acc}\nProperty '${parrent}${key1}' was updated. From '${obj[previous]}' to '${obj[key]}'`;
      }
      const value = obj[key] instanceof Object ? 'complex value' : `value: '${obj[key]}'`;
      return `${acc}\nProperty '${parrent}${key1}' was added with ${value}`;
    } else if (type === '-' && !obj.hasOwnProperty.call(obj, `+ ${key1}`)) {
      return `${acc}\nProperty '${parrent}${key1}' was removed`;
    }
    if (obj[key] instanceof Object && typeof obj[key] !== 'string') {
      const newParrent = `${parrent}${key1}.`;
      return `${acc}${plainer(obj[key], newParrent)}`;
    }
    return acc;
  }, '');
  return result;
};

export default obj => plainer(obj).slice(1);

