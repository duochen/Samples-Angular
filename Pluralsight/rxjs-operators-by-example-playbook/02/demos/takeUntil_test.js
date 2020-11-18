/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// takeUntil
//  take the value until the notifier sends signal

const { timer, interval } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

interval(100)
    .pipe(
        takeUntil(timer(300))
    )
    .subscribe(
        val => console.log('Success: ', val),
        null,
        () => console.log('Complete')
    )