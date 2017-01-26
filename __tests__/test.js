// @flow
/* eslint-disable no-console */

import gendiff from '../src';

describe('test gendiff', () => {
  const firstPath = '__tests__/__fixtures__/before';
  const secondPath = '__tests__/__fixtures__/after';

  const expectResult = '{\n\t  common: {\n\t\t  setting1: Value 1\n\t\t- setting2: 200\n\t\t  setting3: true\n\t\t- setting6: {\n\t\t\tkey: value\n\t\t}\n\t\t+ setting4: blah blah\n\t\t+ setting5: {\n\t\t\tkey5: value5\n\t\t}\n\t}\n\t  group1: {\n\t\t+ baz: bars\n\t\t- baz: bas\n\t\t  foo: bar\n\t}\n\t- group2: {\n\t\tabc: 12345\n\t}\n\t+ group3: {\n\t\tfee: 100500\n\t}\n}';

  it('gendiff test JSON', () => {
    expect(gendiff(`${firstPath}.json`, `${secondPath}.json`)).toEqual(expectResult);
  });

  it('gendiff test YAML', () => {
    expect(gendiff(`${firstPath}.yml`, `${secondPath}.yml`)).toEqual(expectResult);
  });

  it('gendiff test INI', () => {
    expect(gendiff(`${firstPath}.ini`, `${secondPath}.ini`)).toEqual(expectResult);
  });
});

