import { EagerComponent } from './eager.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { LoggerConfig, LOGGER_CONFIG } from './../model/LoggerConfig';
import { LogService } from './../services/LogService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { REST_API_URL } from './../injection/tokens';
import { AppComponent } from './app.component';
import { GreetingService } from './../services/GreetingService';
import { AboutComponent } from './about/about.component';
import { TemplatedListComponent } from './templated-list/templated-list.component';
// tslint:disable-next-line: max-line-length
import { DynamicContentComponent, DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent } from './dynamic-content/dynamic-content.component';

const loggerConfig: LoggerConfig = {
  logLevel: 'warn',
  prefix: 'warning'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EagerComponent,
    TemplatedListComponent,
    DynamicContentComponent,
    DynamicSample2Component,
    DynamicSample1Component,
    UnknownDynamicComponent,
  ],
  imports: [
    BrowserModule,
    routing, 
    FormsModule
  ],
  providers: [
    GreetingService,
    LogService,
    { provide: REST_API_URL, useValue: 'http://localhost:4200/api' },
    { provide: LOGGER_CONFIG, useValue: loggerConfig},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DynamicSample2Component,
    DynamicSample1Component,
    UnknownDynamicComponent
  ],
})
export class AppModule { }
