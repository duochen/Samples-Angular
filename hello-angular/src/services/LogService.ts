import { REST_API_URL } from './../injection/tokens';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LogService {
  constructor(@Inject(REST_API_URL) restApiUrl: string) {
    console.log(restApiUrl);
  }
}
