#!/usr/bin/env node

// @flow
/* eslint-disable no-console */
import program from 'commander';
import genDiff from '..';

program
  .version('0.0.1')
  .arguments('<first_config> <second_config>')
  .action((firstPath, secondPath) =>
    console.log(genDiff(firstPath, secondPath, program.format)))
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);

