/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// retryWhen

const { interval, timer } = require('rxjs');
const { map, retryWhen, scan, takeWhile, tap, delayWhen } = require('rxjs/operators');

interval(1000)
    .pipe(
        map(val => {
            if (val > 5)  {
                // error will be picked up by retryWhen 
                throw val;
            }
            return val;    
        }),
        retryWhen(
            errors => {
                return errors.pipe(
                    tap(val => console.log(`Value ${val} was too high`)),
                    // restart in 3 seconds
                    delayWhen(val => timer(3000))
                )
            }
        )  
    )
    .subscribe(
        val => console.log('Success: ', val),
        err => console.log('Err: ', err)
    )