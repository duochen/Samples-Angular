/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// distinct
// emit unique values across whole source
const { of,from } = require('rxjs');
const { distinct } = require('rxjs/operators');

of(1,2,2,3,3,4,4)
    .pipe(
        distinct()
    )
    .subscribe(
        val => console.log('Success: ', val)
    )

const obj1 = { id: 3, name: 'name 1' };
const obj2 = { id: 4, name: 'name 2' };
const obj3 = { id: 3, name: 'name 3' };
const vals = [obj1, obj2, obj3];
from(vals)
    .pipe(
        distinct(x => x.id)
    )
    .subscribe(
        val => console.log('Success: ', val)
    )
