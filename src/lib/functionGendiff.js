// @flow

import fs from 'fs';
import pathExt from 'path';
import YAML from 'yamljs';
import INI from 'utils-ini-parse';

const getData = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  const expansion = pathExt.extname(path);
  if (expansion === '.json') {
    return JSON.parse(data);
  } else if (expansion === '.yml') {
    return YAML.parse(data);
  } else if (expansion === '.ini') {
    return INI(data);
  }
  return false;
};

const getDiff = (firstObject, secondObject) => {
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

export default (firstPath, secondPath) => {
  const firstData = getData(firstPath);
  const secondData = getData(secondPath);
  return getDiff(firstData, secondData);
};

