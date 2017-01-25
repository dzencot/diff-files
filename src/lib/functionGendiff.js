// @flow

import fs from 'fs';
import YAML from 'yamljs';
import INI from 'utils-ini-parse';

const getObjectFromFile = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  const expansion = path.split('.').pop();
  if (expansion === 'json') {
    return JSON.parse(data);
  } else if (expansion === 'yml') {
    return YAML.parse(data);
  } else if (expansion === 'ini') {
    return INI(fs.readFileSync(data);
  }
  return false;
};

export default (firstPath, secondPath) => {
  const firstObject = getObjectFromFile(firstPath);
  const secondObject = getObjectFromFile(secondPath);
  const result = {};
  Object.keys(firstObject).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(secondObject, key)) {
      if (firstObject[key] !== secondObject[key]) {
        result[`+ ${key}`] = secondObject[key];
        result[`- ${key}`] = firstObject[key];
      } else {
        result[`  ${key}`] = firstObject[key];
      }
    } else {
      result[`- ${key}`] = firstObject[key];
    }
  });
  Object.keys(secondObject).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(firstObject, key)) {
      result[`+ ${key}`] = secondObject[key];
    }
  });
  return result;
};

