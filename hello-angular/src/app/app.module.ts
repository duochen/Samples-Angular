import { LoggerConfig, LOGGER_CONFIG } from './../model/LoggerConfig';
import { LogService } from './../services/LogService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { REST_API_URL } from './../injection/tokens';
import { AppComponent } from './app.component';
import { GreetingService } from './../services/GreetingService';

const loggerConfig: LoggerConfig = {
  logLevel: 'warn',
  prefix: 'warning'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GreetingService,
    LogService,
    { provide: REST_API_URL, useValue: 'http://localhost:4200/api' },
    { provide: LOGGER_CONFIG, useValue: loggerConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
