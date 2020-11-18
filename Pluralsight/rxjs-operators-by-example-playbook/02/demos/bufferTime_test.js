/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// bufferTime
//   determine the lifetime of a buffer
//   emit the created buffer after a given period
const { interval } = require('rxjs');
const { bufferTime, take } = require('rxjs/operators');

interval(1000)
    .pipe(
        take(7),
        bufferTime(2000, 1000)
    )
    .subscribe(
        d => console.log(d)
    )