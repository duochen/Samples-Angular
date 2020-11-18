/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// bufferToggle

const { interval } = require('rxjs');
const { bufferToggle, take, tap } = require('rxjs/operators');

const opening = interval(400).pipe(tap(() => console.log('open')));
const closing = () => interval(300).pipe(tap(() => console.log('close')));
interval(100)
    .pipe(
        tap(x => console.log('x:', x)),
        bufferToggle(opening, closing),
        take(3)
    )
    .subscribe( 
        d => console.log('result:', d)
    )