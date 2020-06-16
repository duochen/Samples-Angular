import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlbButtonModule } from '@slb-dls/angular-material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DlsBasicComponent } from './components/dls-basic/dls-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    DlsBasicComponent
  ],
  imports: [
    BrowserModule,
    SlbButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
