import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { concatMap, finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
    console.log('loading service started...');
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
            .pipe(
              tap(() => {
                this.loadingOn()
              }),
              concatMap(() => obs$),
              finalize(() => this.loadingOff())
            );
  }

  loadingOn() {
    console.log('loadingOn...');
    this.loadingSubject.next(true);
  }

  loadingOff() {
    console.log('loadingOff...');
    this.loadingSubject.next(false);
  }
}
