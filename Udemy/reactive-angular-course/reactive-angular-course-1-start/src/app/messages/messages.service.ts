import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { filter } from 'rxjs/operators';

@Injectable()
export class MessagesService {
  private errorSubject = new BehaviorSubject<string[]>([]);
  errors$ = this.errorSubject.asObservable()
    .pipe(
      filter(messages => messages && messages.length  > 0)
    );

  showErrors(...errors: string[]) {
    this.errorSubject.next(errors);
  }
}
