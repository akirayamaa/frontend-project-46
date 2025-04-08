#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    if (options.format) {
      console.log(`Format: ${options.format}`);
    }
  });

program.parse();
