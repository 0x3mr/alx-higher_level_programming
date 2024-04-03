#!/usr/bin/node
const args = process.argv;
const variable = parseInt(args[2], 10);

if (args[2]) {
    if (isNaN(variable)) {
        console.log("Not a number");
    } else {
        console.log("My number: " + variable);
    }
} else {
    console.log("Not a number");
}
