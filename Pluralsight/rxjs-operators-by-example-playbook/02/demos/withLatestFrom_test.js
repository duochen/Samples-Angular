/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// withLatestFrom
//    when the original source emit a value
//    combine the value with the latest values from the new sources

const { timer, of, interval } = require('rxjs');
const { withLatestFrom, map, take, delay } = require('rxjs/operators');

const source1 = interval(5000);
const source2 = interval(1000);
const example = source1.pipe(
    withLatestFrom(source2),
    map(([first, second]) => {
        return `First (5s): ${first} Second (1s): ${second}`
    })
);
example.subscribe(val => console.log(val))