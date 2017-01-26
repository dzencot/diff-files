// @flow
/* eslint-disable no-console */

import gendiff from '../src';

describe('test gendiff', () => {
  const firstPath = '__tests__/__fixtures__/before';
  const secondPath = '__tests__/__fixtures__/after';

  const result = {
    '  common': {
      '  setting1': 'Value 1',
      '- setting2': 200,
      '  setting3': true,
      '- setting6': {
        key: 'value',
      },
      '+ setting4': 'blah blah',
      '+ setting5': {
        key5: 'value5',
      },
    },
    '  group1': {
      '+ baz': 'bars',
      '- baz': 'bas',
      '  foo': 'bar',
    },
    '- group2': {
      abc: 12345,
    },
    '+ group3': {
      fee: 100500,
    },
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

