/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// shareReplay
//  make Observable hot, but also provide some past values

const { interval } = require('rxjs');
const { shareReplay, take, tap } = require('rxjs/operators');

const source$ = interval(100).pipe(shareReplay(1), take(3));

source$.subscribe(
    val => console.log('subscribe 1: ', val)
)
setTimeout(() => {
    setTimeout(() => {
        source$.subscribe(
            val => console.log('subscribe 2: ', val)
        )
    }, 200)
}, 100)


