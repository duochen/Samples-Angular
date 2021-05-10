import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickCounterService {
  clicks = 0;
  clicked = new EventEmitter();

  constructor() { }

  click() {
    this.clicks++;
    this.clicked.emit(this.clicks);
  }


}
