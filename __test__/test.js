// @flow
/* eslint-disable no-console */

import getJSON from '../src/utils/getJSON';
import gendiff from '../src/utils/functionGendiff';

describe('test getJSON', () => {
  const data = '{ "firstKey": "firstValue", "secondKey": { "thirdKey": "thirdValue" }}';
  const result = {
    firstKey: 'firstValue',
    secondKey: {
      thirdKey: 'thirdValue',
    },
  };

  it('JSON', () => {
    expect(getJSON(data)).toEqual(result);
  });
});

describe('test gendiff', () => {
  const before = '{ "host": "hexlet.io", "timeout": 50, "proxy": "123.234.53.22" }';
  const after = '{ "host": "hexlet.io", "timeout": 20, "verbose": true }';

  const result = {
    '  host': 'hexlet.io',
    '+ timeout': 20,
    '- timeout': 50,
    '- proxy': '123.234.53.22',
    '+ verbose': true,
  };
  const testing = gendiff(before, after);

  it('gendiff test#1', () => {
    expect(testing).toEqual(result);
  });
});

