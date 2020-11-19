/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// map
// - transform every value

const { of } = require('rxjs');
const { map, filter } = require('rxjs/operators');

console.log('# square every number');
of(1,2,3,4,5,6)
    .pipe(
        filter(x => x % 2 === 0),
        map(x => x * x)
    )
    .subscribe(
        console.log
    )