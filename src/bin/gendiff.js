#!/usr/bin/env node

// @flow
/* eslint-disable no-console */
import program from 'commander';
import functionGendiff from '../utils/functionGendiff';
import fs from 'fs';

program
  .version('0.0.1')
  .arguments('<first_config> <second_config>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');


program.parse(process.argv);

const runGenDiff = () => {
  const firstFileString = fs.readFileSync(program.args[0], String);
  const secondFileString = fs.readFileSync(program.args[1], String);
  console.log(functionGendiff(firstFileString, secondFileString));
}
runGenDiff();

