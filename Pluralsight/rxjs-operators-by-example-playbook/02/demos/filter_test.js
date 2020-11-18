/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// filter
// emit only values matching a given condition

const { of } = require('rxjs');
const { filter } = require('rxjs/operators');

of(1,2,3,4,5,6,7,8)
    .pipe(
        filter(x => x % 2 === 0)
    )
    .subscribe(
        val => console.log('Success: ',val)
    )