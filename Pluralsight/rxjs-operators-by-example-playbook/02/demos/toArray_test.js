/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// toArray
//   put all values into an array
//   once the source completes, emit the whole array

const { interval } = require('rxjs');
const { toArray, take } = require('rxjs/operators');

interval(100)
    .pipe(
        take(10),
        toArray()
    )
    .subscribe(
        console.log
    )