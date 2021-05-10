import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { OnInitDemoComponent } from './on-init-demo/on-init-demo.component';
import { DoCheckDemoComponent } from './do-check-demo/do-check-demo.component';
import { AfterContentInitDemoComponent } from './after-content-init-demo/after-content-init-demo.component';
import { AfterContentInitChildComponent } from './after-content-init-child/after-content-init-child.component';
import { AfterViewInitDemoComponent } from './after-view-init-demo/after-view-init-demo.component';
import { OnDestroyDemoComponent } from './on-destroy-demo/on-destroy-demo.component';
import { MyOnChangesComponent } from './my-on-changes/my-on-changes.component';
import { MyOnInitComponent } from './my-on-init/my-on-init.component';
import { MyDoCheckComponent } from './my-do-check/my-do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesDemoComponent,
    OnInitDemoComponent,
    DoCheckDemoComponent,
    AfterContentInitDemoComponent,
    AfterContentInitChildComponent,
    AfterViewInitDemoComponent,
    OnDestroyDemoComponent,
    MyOnChangesComponent,
    MyOnInitComponent,
    MyDoCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
