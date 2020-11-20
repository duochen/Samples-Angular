/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// every
// determine if every value meets the given condition

const { of } = require('rxjs');
const { every, tap } = require('rxjs/operators');


of(1,2,3,4,5)
    .pipe(
        every(x => x < 3)
    )
    .subscribe(console.log)