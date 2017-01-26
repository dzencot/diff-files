// @flow

const objToString = (object) => {
  const objString = (obj, tab) => {
    const result = Object.keys(obj).reduce((acc, key) => {
      const newTab = `${tab}\t`;
      if (obj[key] instanceof Object && typeof obj[key] !== 'string') {
        return `${acc}${tab}${key}: {\n${objString(obj[key], newTab)}${tab}}\n`;
      }
      return `${acc}${tab}${key}: ${obj[key]}\n`;
    }, '');
    return result;
  };

  const result = objString(object, '\t');
  return `{\n${result}}`;
};

export default objToString;

