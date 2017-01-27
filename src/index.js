// @flow
/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import gendiff from './lib/functionGendiff';
import parser from './lib/parser';
import toPlain from './lib/plain';

export default (firstPath, secondPath, ...options) => {
  const firstData = fs.readFileSync(firstPath, 'utf-8');
  const firstExt = path.extname(firstPath);
  const secondData = fs.readFileSync(secondPath, 'utf-8');
  const secondExt = path.extname(secondPath);

  const firstParsed = parser(firstExt)(firstData);
  const secondParsed = parser(secondExt)(secondData);

  const diff = (gendiff(firstParsed, secondParsed));

  if (options[0] === 'plain') {
    return toPlain(diff);
  }
  return JSON.stringify(diff, null, 2).replace(/,/g, '');
};

