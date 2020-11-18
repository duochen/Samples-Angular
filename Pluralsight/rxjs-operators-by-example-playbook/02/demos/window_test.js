/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// window
const { interval } = require('rxjs');
const { window, tap, take, switchMap, toArray } = require('rxjs/operators');

interval(100)
    .pipe(
        tap(x => console.log('tap: ', x)),
        window(interval(500)),
        take(3),
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(d => {
        console.log(d)
    })