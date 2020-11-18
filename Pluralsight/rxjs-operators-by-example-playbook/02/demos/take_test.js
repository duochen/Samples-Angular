/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// take
//   the first n values and complete

const { timer, of } = require('rxjs');
const { take } = require('rxjs/operators');

of(1,2,3,4,5)
    .pipe(
        take(3)
    )
    .subscribe(
        val => console.log('Success: ', val)
    )