import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCustomLogService {
  private prefix = '[DUO]';

  constructor() { }

  setPrefix(value: string) {
    this.prefix = value;
  }

  info(message: string) {
    console.info(`${this.prefix}: [info] ${message}`);
  }
}