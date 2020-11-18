/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// first
// emit only first value then complete

const { of } = require('rxjs');
const { first, last, min, max, elementAt } = require('rxjs/operators');

//#region Example 1
console.log('# just the first...');
of(0, 1, 5, 9, 2, 3, 4)
   .pipe(
        first()  // elementAt(3)
   )
   .subscribe(console.log)