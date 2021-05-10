import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ClickCounterService } from './click-counter.service';
import { ComponentDComponent } from './component-d/component-d.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClickCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
