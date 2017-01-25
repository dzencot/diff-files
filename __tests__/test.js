// @flow
/* eslint-disable no-console */

import gendiff from '../src';

describe('test gendiff', () => {
  const firstPath = '__tests__/__fixtures__/before.json';
  const secondPath = '__tests__/__fixtures__/after.json';

  const result = {
    '  host': 'hexlet.io',
    '+ timeout': 20,
    '- timeout': 50,
    '- proxy': '123.234.53.22',
    '+ verbose': true,
  };

  it('gendiff test#1', () => {
    expect(gendiff(firstPath, secondPath)).toEqual(result);
  });
});

