#!/usr/bin/env node

// @flow
import program from 'commander';
import getDiff from '..';
import output from '../output';

program
  .version('0.0.1')
  .arguments('<first_config> <second_config>')
  .action((firstPath, secondPath) =>
    output(getDiff(firstPath, secondPath, program.format)))
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);

