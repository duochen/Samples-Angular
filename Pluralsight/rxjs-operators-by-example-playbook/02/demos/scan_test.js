/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// scan
//   apply accumulative functions to values from a sequence
// Comparision:
//   reduce() emit the final result
//   scan() emit every accumulative results
//      which helps track the history of those results

const { of, Subject, interval } = require('rxjs');
const { scan, map, mergeMap, distinctUntilChanged, tap, delay } = require('rxjs/operators');

of(1,2,3)
    .pipe(
        scan((acc, val) => acc + val, 0)
    )
    .subscribe(
        console.log
    )

const subject = new Subject()
subject.pipe(
    scan((acc, curr) => Object.assign({}, acc, curr), {})
).subscribe(
    val => console.log('Accumated object:', val)
)

subject.next({name: 'Joe'});
subject.next({age: 30});
subject.next({favoriteLanguage: 'Javascript'});

scanObs = interval(1000)
    .pipe(
        scan((a, c) => [...a, c], []),
        tap(val => console.log('tap:', val)),
        map(r => r[Math.floor(Math.random() * r.length)]),
        distinctUntilChanged()
    )
    .subscribe(console.log)

const fakeRequest = of('response').pipe(delay(2000));

interval(1000)
    .pipe(
        tap(val => console.log('tap1: ', val)),
        mergeMap(_ => fakeRequest),
        tap(val => console.log('tap2:', val)),
        scan((all, current) => [...all, current], [])
    )
    .subscribe(console.log)