import { Observable, fromEvent, interval, of } from 'rxjs';
import { pluck, tap, map, switchMap, mergeMap, delay, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Test Observable
var observable = Observable.create((observer: any) => {
    observer.next('Hello World');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});

observable.subscribe(
    (x: any) => logItem(x),
    (error: any) => logItem('Error: ' + error),
    () => logItem('Completed')
);

function logItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

// Test switchMap
var button1 = document.getElementById('button1');
var obs1 = fromEvent(button1, 'click');
var obs2 = interval(1000);

obs1.pipe(
    switchMap(
        event => {
            return obs2
        }
    )).subscribe(
        value => console.log(value)
    )

// Test mergeMap
// faking network request for save
const saveLocation = (location: any) => {
    return of(location).pipe(delay(500));
};
const button2 = document.getElementById('button2');
const click$ = fromEvent(button2, 'click');
click$
    .pipe(
        mergeMap((e: MouseEvent) => {
            return saveLocation({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            })
        })
    )
    .subscribe(r => console.log('Saved!', r))    

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const span = document.querySelector('span');
const obs1$ = fromEvent(input1, 'input');
const obs2$ = fromEvent(input2, 'input');
obs1$.pipe(
    mergeMap(
        (event1: any) => {
            return obs2$.pipe(
                map((event2: any)  => event1.target.value + ' ' + event2.target.value)
            )
        }
    )
).subscribe(
    combinedValue => {
        // console.log(combinedValue);
        span.textContent = combinedValue;
    }    
)

// Test pluck
const input3 = document.querySelector('#input3');
const obs3$ = fromEvent(input3, 'input');
obs3$
    .pipe(
        //map((event: any) => event.target.value),
        pluck('target', 'value'),
        debounceTime(500),
        distinctUntilChanged()
    )
    .subscribe(
        value => console.log(value)
    )  

// Test difference between Promise and Observable
console.clear();

// Look at the similarities of the two constructors
const p = new Promise((resolve, reject) => {
    console.log('CREATING PROMISE');
    resolve("THIS IS A PROMISE");
    resolve("THIS IS ANOTHER PROMISE");
})

let count = 0;
const o = new Observable((observer) =>  {
    console.log('CREATING OBSERVABLE');
    setInterval(() => {
        if (count++ > 3) observer.complete();
        observer.next("THIS IS AN OBSERVERALBE");
    }, 1000);
    // observer.next("THIS IS ANOHTER OBSERVERALBE");
    //observer.error("THIS IS AN ERROR");
    //observer.complete();
})

const p2 = p.then((res) => {
    // Success
    console.log('Promise Success: ', res)
}, (err) => {
    // Error
    console.log('Promise Error')
});

const subscription = o.subscribe((res) => {
    // Success
    console.log('Obs Success: ', res)
}, (err) => {
    // Error
    console.log('Obs Error')
}, () => {
    // Complete
    console.log('Obs Commplete')
})