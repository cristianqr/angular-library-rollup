const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');

shell.rm('-Rf', ['./dist/*']);

shell.echo(chalk.green('Transpile typescript with ngc'));
shell.exec('./node_modules/.bin/ngc -p tsconfig.json');

shell.echo(chalk.green('bundle ESM2015 with rollup'));
shell.exec('./node_modules/.bin/rollup -c rollup-esm2015.config.js');

shell.echo(chalk.green('bundle UMD with rollup'));
shell.exec('./node_modules/.bin/rollup -c rollup-umd.config.js');

shell.echo(chalk.green('Clean dist folder'));
shell.rm('-Rf', ['./dist/*/!(*.umd.js|angular-library-rollup.js|*.d.ts)']);

shell.echo(chalk.green('Copy package.json and README.md'));
const package = require('./package.json');
delete package.devDependencies;
fs.writeFileSync('./dist/package.json', JSON.stringify(package, null, 2));
shell.cp('-Rf', ['README.md'], './dist');
