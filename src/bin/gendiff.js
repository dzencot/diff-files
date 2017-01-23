// @flow
/* eslint-disable no-console */

const help = require('commander');

help
  .version('0.0.1')
  .usage('[options] <first_config> <second_config>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');


help.parse(process.argv);
console.log('hello, world');

