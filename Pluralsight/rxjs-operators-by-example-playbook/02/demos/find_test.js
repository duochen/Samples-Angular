/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// find
// emit the first value that matches a given condition

const { of } = require('rxjs');
const { find } = require('rxjs/operators');

of(1,2,3,4,5,6)
    .pipe(
        find(x => x > 4)
    )
    .subscribe(
        console.log
    )