// @flow
import getJson from './getJSON';

export default (firstData, secondData) => {
  const firstJson = getJson(firstData);
  const secondJson = getJson(secondData);
  const result = {};
  Object.keys(firstJson).forEach((key) => {
    if (secondJson.hasOwnProperty(key)) {
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
    if (!firstJson.hasOwnProperty(key)) {
      result[`+ ${key}`] = secondJson[key];
    }});
  return result;
}

