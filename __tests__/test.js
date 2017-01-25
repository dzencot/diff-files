// @flow
/* eslint-disable no-console */

import gendiff from '../src';

describe('test gendiff', () => {
  const firstPath = '__tests__/__fixtures__/before';
  const secondPath = '__tests__/__fixtures__/after';

  const result = {
    '  host': 'hexlet.io',
    '+ timeout': 20,
    '- timeout': 50,
    '- proxy': '123.234.53.22',
    '+ verbose': true,
  };

  it('gendiff test JSON', () => {
    expect(gendiff(`${firstPath}.json`, `${secondPath}.json`)).toEqual(result);
  });

  it('gendiff test YAML', () => {
    expect(gendiff(`${firstPath}.yml`, `${secondPath}.yml`)).toEqual(result);
  });

  it('gendiff test INI', () => {
    expect(gendiff(`${firstPath}.ini`, `${secondPath}.ini`)).toEqual(result);
  });
});

