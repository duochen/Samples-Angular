/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// share
//  make Observable hot

const { interval, timer } = require('rxjs');
const { share, take } = require('rxjs/operators');

const example = interval(1000).pipe
    (
        share()
        // tap(() => console.log('****SIDE EFFECT***')),
        // mapTo('***RESULT***')
    );

const subscribe1 = example.subscribe(val => console.log(val));
setTimeout(
    () => example.subscribe(val => console.log(val)), 3000);

