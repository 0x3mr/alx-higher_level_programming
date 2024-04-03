#!/usr/bin/node
// a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer

const args = process.argv;
const first = parseInt(args[2], 10);
let i, j;

if (!isNaN(first)) {
    if (first === 1) {
        console.log("X");
    } else if (first <= 0) {
        // nothing
    } else {
        for (j = 0; j < first; j++) {
            for (i = 0; i < first; i++) {
                process.stdout.write("X");
            }
            console.log();
        }
    }
} else {
    console.log("Missing Size");
}