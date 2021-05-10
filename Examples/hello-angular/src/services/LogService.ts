import { LOGGER_CONFIG, LoggerConfig } from './../model/LoggerConfig';
import { REST_API_URL } from './../injection/tokens';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LogService {
  constructor(@Inject(REST_API_URL) restApiUrl: string, @Inject(LOGGER_CONFIG) loggerConfig: LoggerConfig) {
    console.log(`Rest API URL: ` + restApiUrl);
    console.log(`Logging Config: ` + loggerConfig.logLevel + ' ' + loggerConfig.prefix);
  }
}
