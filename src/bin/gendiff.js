// @flow
/* eslint-disable no-console */

const program = require('commander');

program
  .version('0.0.1')
  .arguments('<first_config> <second_config>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');


program.parse(process.argv);
console.log('hello, world');

