import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pm-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy {
  pageTitle = 'Demo';

  private source$ = interval(1000);
  private readonly unsubscribe$: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.source$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(second => console.log('Timer: ', second));
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
