const { interval } = require('rxjs');
const { tap, buffer, take } = require('rxjs/operators');
 
console.log('#emit the buffer after 1000 ms')
interval(100)
    .pipe(
        buffer(interval(1000)),
        take(3),
        // tap(number => console.log("number: ", number))
    )
    .subscribe(
        d => console.log(d)
    )