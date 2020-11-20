/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// sequenceEqual
//   compare values from two different sources
//   return true if every value pairs matches

const { of } = require('rxjs');
const { sequenceEqual, delay, tap } = require('rxjs/operators');

of(1,2,3)
    .pipe(
        sequenceEqual(of(1,2,13))
    )
    .subscribe(console.log)