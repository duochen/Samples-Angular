/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// count
// emit the total number of emissions
const { of } = require('rxjs');
const { count } = require('rxjs/operators');


of(1,2,3,4,5)
    .pipe(count())
    .subscribe(
        console.log
    )