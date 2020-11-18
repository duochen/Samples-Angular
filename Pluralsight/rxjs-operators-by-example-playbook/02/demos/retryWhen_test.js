/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// retryWhen

const { interval, timer } = require('rxjs');
const { map, retryWhen, scan, takeWhile, tap, delayWhen } = require('rxjs/operators');

let swallowError = false;
interval(200)
    .pipe(
        map(x => {
            console.log('attempting: ' + x);
            if (x == 1) {
                throw 'error processing: ' + x;
            }
            return x;
        }),
        retryWhen(
            errors => {
                return errors.pipe(delayWhen(() => timer(3000)));
            }
            // errors => {
            //     if (swallowError) {
            //         return errors.pipe(
            //             tap(err  => console.log('Inside retryWhen:', err)),
            //             scan(acc => acc + 1, 0),
            //             tap(
            //                 retryCount => {
            //                     if (retryCount === 3) {
            //                         console.log('Swallowing error and completing ');
            //                     } else {
            //                         console.log('Retrying whole source - retry #' + retryCount);
            //                     }
            //                 }
            //             ),
            //             takeWhile(retryCount => retryCount < 2)
            //         )
            //     } else {
            //         return errors.pipe(
            //             tap(err => console.log(err)),
            //             scan(acc => acc + 1, 0),
            //             tap(retryCount => {
            //                 if (retryCount === 2) {
            //                     console.log('Failing');
            //                     throw 'oops';
            //                 } else {
            //                     console.log('Retrying wholel source - retry #' + retryCount);
            //                 }
            //             })
            //         )
            //     }
            // }
        )
    )
    .subscribe(
        x => console.log('successfully processed: ', x),
        err => console.log('*****error: ' + err),
        () => console.log('completed successfully')
    )