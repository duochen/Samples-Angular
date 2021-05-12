import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCustomLogService {

  constructor() { }

  info(message: string) {
    console.log(`[custom]: [info] ${message}`);
  }
}

