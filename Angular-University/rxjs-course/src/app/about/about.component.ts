import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
      this.test4();
      // this.test3();
      // this.test2();
      // this.test1();
    }

    test4() {
      let subject = new ReplaySubject<string>(2);
      subject.next("First value");
      subject.next("Second value");
      subject.next("Third value");

      subject.asObservable().subscribe((data) => {
        console.log("First subscriber got data >>>>>" + data);
      });

      subject.next("Fourth data");
    }

    test3() {
      let subject = new BehaviorSubject<string>("First value");

      subject.asObservable().subscribe((data) => {
        console.log("First subscriber got data >>>>>" + data);
      });

      subject.next("Second value");
    }

    test2() {
      let subject = new Subject<string>();

      subject.subscribe((data) => {
        console.log("Subscriber 1 got data >>>>>" + data);
      });

      subject.subscribe((data) => {
        console.log("Subscriber 2 got data >>>>>" + data);
      })

      subject.next("Eureka");
    }

    test1() {
      let subject = new Subject<string>();

      // We subscribe to the subject
      subject.subscribe((data) => {
        console.log("Subscriber got data >>>>> " + data);
      });

      // We use the subject to emit data
      subject.next("Eureka");
    }
}
