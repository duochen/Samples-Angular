const { of, interval } = require('rxjs');
const { tap, bufferCount, take } = require('rxjs/operators');

//#region example 0
interval(100)
    .pipe(
        bufferCount(10),
        take(3),
    )
    .subscribe(
        d => console.log('example 0:', d)
    )

//#region example 1
console.log('# emit buffer of 2 values or when complete');
of(1,2,3)
    .pipe(
        bufferCount(2)
    )
    .subscribe(
        d => console.log('example 1:', d)
    );

of(1,2,3,4,5,6,7,8,9)
    .pipe(
        bufferCount(2, 3)
    )
    .subscribe(
        d => console.log('example 2:', d)
    );

