// @flow
/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import gendiff from './lib/functionGendiff';
import parser from './lib/parser';
import objToString from './lib/objectToString';

export default (firstPath, secondPath) => {
  const firstData = fs.readFileSync(firstPath, 'utf-8');
  const firstExt = path.extname(firstPath);
  const secondData = fs.readFileSync(secondPath, 'utf-8');
  const secondExt = path.extname(secondPath);

  const firstParsed = parser(firstExt)(firstData);
  const secondParsed = parser(secondExt)(secondData);
  return objToString(gendiff(firstParsed, secondParsed));
};

