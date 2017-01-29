// @flow
/* eslint-disable no-console */

import gendiff from '../src';

describe('test gendiff', () => {
  const firstPath = '__tests__/__fixtures__/before';
  const secondPath = '__tests__/__fixtures__/after';

  const expectResult = '{\n' +
    '    common: {\n' +
    '        setting1: Value 1\n' +
    '      - setting2: 200\n' +
    '        setting3: true\n' +
    '      - setting6: {\n' +
    '            key: value\n' +
    '        }\n' +
    '      + setting4: blah blah\n' +
    '      + setting5: {\n' +
    '            key5: value5\n' +
    '        }\n' +
    '    }\n' +
    '    group1: {\n' +
    '      + baz: bars\n' +
    '      - baz: bas\n' +
    '        foo: bar\n' +
    '    }\n' +
    '  - group2: {\n' +
    '        abc: 12345\n' +
    '    }\n' +
    '  + group3: {\n' +
    '        fee: 100500\n' +
    '    }\n' +
    '}';

  it('gendiff test JSON', () => {
    expect(gendiff(`${firstPath}.json`, `${secondPath}.json`)).toEqual(expectResult);
  });

  it('gendiff test YAML', () => {
    expect(gendiff(`${firstPath}.yml`, `${secondPath}.yml`)).toEqual(expectResult);
  });

  it('gendiff test INI', () => {
    expect(gendiff(`${firstPath}.ini`, `${secondPath}.ini`)).toEqual(expectResult);
  });

  const resultPlain = `Property 'common.setting2' was removed
Property 'common.setting6' was removed
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with complex value
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
Property 'group3' was added with complex value`;
  it('gendiff test plain', () => {
    expect(gendiff(`${firstPath}.json`, `${secondPath}.json`, 'plain')).toEqual(resultPlain);
  });

  const expectObj = [
    {
      name: 'common',
      type: 'object',
      data: [
        {
          name: 'setting1',
          type: 'unchanged',
          data: 'Value 1',
        },
        {
          name: 'setting2',
          type: 'removed',
          data: 200,
        },
        {
          name: 'setting3',
          type: 'unchanged',
          data: true,
        },
        {
          name: 'setting6',
          type: 'removed',
          data: {
            key: 'value',
          },
        },
        {
          name: 'setting4',
          type: 'added',
          data: 'blah blah',
        },
        {
          name: 'setting5',
          type: 'added',
          data: {
            key5: 'value5',
          },
        },
      ],
    },
    {
      name: 'group1',
      type: 'object',
      data: [
        {
          name: 'baz',
          type: 'updated',
          data: 'bars',
          previous: 'bas',
        },
        {
          name: 'foo',
          type: 'unchanged',
          data: 'bar',
        },
      ],
    },
    {
      name: 'group2',
      type: 'removed',
      data: {
        abc: 12345,
      },
    },
    {
      name: 'group3',
      type: 'added',
      data: {
        fee: 100500,
      },
    },
  ];


  it('gendiff test json', () => {
    expect(gendiff(`${firstPath}.json`, `${secondPath}.json`, 'json')).toEqual(JSON.stringify(expectObj, null, '  '));
  });
});

