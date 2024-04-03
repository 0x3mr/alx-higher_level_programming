#!/usr/bin/node
// Print the first argument inc

const args = process.argv;

if (args[2]) {
  console.log(args[2]);
} else {
  console.log('No argument');
}
