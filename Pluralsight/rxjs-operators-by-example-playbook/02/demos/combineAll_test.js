/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// combineAll
// combine latest values from multiple observables
// once all sources have emitted

const { of, interval } = require('rxjs');
const { combineAll, take, delay, tap } = require('rxjs/operators');

const source1 = of(1,2,3);
const source2 = interval(2000).pipe(take(3));
const source3 = of(4,5,6).pipe(delay(5000));
const source4 = of('a','b','c','d');

of(source1, source2, source3, source4)
    .pipe(
        tap((a,b,c,d) => {
            console.log('source1:', a);
            console.log('source2:', b);
            console.log('source3:', c);
            console.log('source4:', d);
        }), 
        combineAll()
    )
    .subscribe(([v1,v2,v3,v4]) =>
    {
        console.log(v1 + '-' + v2 + '-' + v3 + '-' + v4);
    })
