/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// catchError
// prevent the error from stopping the stream
// replace the error with a new source

const { throwError, of } = require('rxjs');
const { catchError, map } = require('rxjs/operators');

console.log('# catch then rethrow the error');
throwError('error')
    .pipe(
        catchError(err => {
            console.log(`caught an error: ${err}`);
            return throwError(`rethrown: ${err}`);
        }),
        catchError(err => {
            console.log(`inside another catchError: ${err}`);
            return of(undefined);
        })
    )
    .subscribe(
        val => console.log('result:', val),
        err => console.log('oops'),
        () => console.log('complete!')
    )

of('a', 1)
    .pipe(
        map(v => v.toUpperCase()),
        catchError(err => {
            return of(undefined);
        })
    )
    .subscribe(
        d => {
            if (d) {
                console.log(d);
            }
        },
        err => console.log('oops'),
        () => console.log('complete')
    )