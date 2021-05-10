import { MyHostPropertiesDirective } from './my-host-properties.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostEventsComponent } from './host-events/host-events.component';
import { HostPropertiesDirective } from './host-properties.directive';
import { MyHostEventsComponent } from './my-host-events/my-host-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HostEventsComponent,
    HostPropertiesDirective,
    MyHostPropertiesDirective,
    MyHostEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
