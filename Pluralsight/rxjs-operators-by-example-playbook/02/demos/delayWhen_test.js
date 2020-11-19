/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// delayWhen
// delay emission based on newly created observable
const { of, interval } = require('rxjs');
const { delayWhen, tap } = require('rxjs/operators');

of(1,2,3)
    .pipe(
        tap(x => console.log('tap:', x)),
        delayWhen(x => {
            return interval(x * 1000)
        })
    )
    .subscribe(console.log)