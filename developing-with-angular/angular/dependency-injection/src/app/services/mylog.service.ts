import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylogService {

  constructor() { }

  info(message: string) {
    console.info(`[info] ${message}`);
  }
}
 