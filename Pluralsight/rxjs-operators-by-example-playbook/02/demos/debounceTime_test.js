/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// debounceTime
// if within a given period of time, the source does not emit anything new, emit the current value

const { Observable } = require('rxjs');
const { debounceTime, tap } = require('rxjs/operators');


const events = Observable.create(observer => {
    observer.next(1);
    setTimeout(() => observer.next(2), 550);
    setTimeout(() => observer.next(3), 1000);
})

events.pipe(
    tap(x => console.log("tap: ", x)),
    debounceTime(500)
).subscribe(console.log)