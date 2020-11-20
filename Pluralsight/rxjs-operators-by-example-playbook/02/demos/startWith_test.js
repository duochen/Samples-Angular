/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// startWith
//   prepend the stream with given values

const { of } = require('rxjs');
const { startWith } = require('rxjs/operators');

console.log('# prepend two values');
of(1, 2, 3)
    .pipe(startWith(1, 2))
    .subscribe(val => console.log(val));
// Output:
// 1
// 2
// 3
