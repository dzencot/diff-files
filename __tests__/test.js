// @flow
/* eslint-disable no-console */

import gendiff from '../src/utils/functionGendiff';

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

