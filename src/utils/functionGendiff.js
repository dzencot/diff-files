// @flow

import fs from 'fs';

export default (firstPath, secondPath) => {
  const firstJson = JSON.parse(fs.readFileSync(firstPath, String));
  const secondJson = JSON.parse(fs.readFileSync(secondPath, String));
  const result = {};
  Object.keys(firstJson).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(secondJson, key)) {
      if (firstJson[key] !== secondJson[key]) {
        result[`+ ${key}`] = secondJson[key];
        result[`- ${key}`] = firstJson[key];
      } else {
        result[`  ${key}`] = firstJson[key];
      }
    } else {
      result[`- ${key}`] = firstJson[key];
    }
  });
  Object.keys(secondJson).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(firstJson, key)) {
      result[`+ ${key}`] = secondJson[key];
    }
  });
  return result;
};

