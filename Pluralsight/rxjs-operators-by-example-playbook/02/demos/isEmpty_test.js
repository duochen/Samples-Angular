/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// isEmpty
// - emit true if the observable complete without any next events
// - emit false otherwise

const { of } = require('rxjs');
const { isEmpty, delay } = require('rxjs/operators');


of(1)
    .pipe(isEmpty())
    .subscribe(console.log)
