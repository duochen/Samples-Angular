import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { SlbButtonModule } from '@slb-dls/angular-material/button'
import { DlsBasicComponent } from './components/dls-basic/dls-basic.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';
import { AgGridBasicComponent } from './components/ag-grid-basic/ag-grid-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    DlsBasicComponent,
    AgGridBasicComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    MatIconModule,
    HttpClientModule,
    SlbButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
