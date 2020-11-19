/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// debounce
// emit value after inner Observable completes or emits
// if no new values from source

const { timer, interval, of } = require('rxjs');
const { debounce, take, tap } = require('rxjs/operators');

of('WAIT', 'ONE', 'SECOND', 'Last will display')
    .pipe(
        debounce(() => timer(1000))
    )
    .subscribe(console.log)

interval(1000)
    .pipe(
        debounce(val => timer(val * 200))
    )
    .subscribe(
        val => console.log(`Example Two: ${val}`)
    )