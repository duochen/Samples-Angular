import { LogService } from './../services/LogService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { REST_API_URL } from './../injection/tokens';
import { AppComponent } from './app.component';
import { GreetingService } from './../services/GreetingService';

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
    { provide: REST_API_URL, useValue: 'http://localhost:4200/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
