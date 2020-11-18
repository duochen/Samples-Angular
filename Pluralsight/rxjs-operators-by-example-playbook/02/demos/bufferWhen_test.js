/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// bufferWhen
// determine the closing point of a buffer

const { interval } = require('rxjs');
const { bufferWhen, take, tap, subscribeOn } = require('rxjs/operators');

let x = 0;
interval(500)
    .pipe(
        take(10),
        tap(d => x = d),
        bufferWhen(() => {
            if (x < 5) {
                return interval(1000);
            }
            return interval(500);
        })
    )
    .subscribe(
        value => console.log('result:', value)
    )