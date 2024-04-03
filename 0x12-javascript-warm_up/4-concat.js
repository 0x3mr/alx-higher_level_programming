#!/usr/bin/node
// script that prints two arguments passed to it

const args = process.argv;
const first = args[2];
const second = args[3];

console.log(args[2] + " is " + args[3]);
