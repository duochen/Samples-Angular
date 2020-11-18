/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// takeWhile
//    take the value while the condition held true
//    once the condition becomes false, emit complete event

const { of } = require('rxjs');
const { takeWhile } = require('rxjs/operators');

of(1,2,3,4,5,6)
    .pipe(
        takeWhile(x => x < 4)
    )
    .subscribe(
        val => console.log('Success: ', val)
    )