/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// mapTo
// - transform every value to the same output

const { of } = require('rxjs');
const { mapTo } = require('rxjs/operators');

console.log('# map to const string');
of(1,2,3,4)
    .pipe(
        mapTo('X')
    )
    .subscribe(console.log)