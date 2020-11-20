import { Observable, fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

var button = document.getElementById('button1');
var obs1 = fromEvent(button, 'click');
var obs2 = interval(1000);

obs1.pipe(
    switchMap(
        event => {
            return obs2
        }
    )).subscribe(
        value => console.log(value)
    )
