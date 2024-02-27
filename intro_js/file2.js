// const myAge = require("./file1") //default import
// const {myAge, myName} = require("./file1") //named import

import chalk from 'chalk';
import { age, Name } from './file1.js';

console.log('My age ', age);
console.log('My name ', Name);

console.log(chalk.blue('Hello world!'));
