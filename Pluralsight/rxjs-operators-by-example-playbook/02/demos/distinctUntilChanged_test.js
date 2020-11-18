/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// distinctUntilChanged
// do not emit value until changed

const { of, from } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

const vals = ['a', 'b', 'b', 'c', 'a', 'd'];
from(vals)
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(
        console.log
    )
