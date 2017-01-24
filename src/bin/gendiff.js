#!/usr/bin/env node

// @flow
/* eslint-disable no-console */
import program from 'commander';

program
  .version('0.0.1')
  .arguments('<first_config> <second_config>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');


program.parse(process.argv);
console.log('hello, world');

