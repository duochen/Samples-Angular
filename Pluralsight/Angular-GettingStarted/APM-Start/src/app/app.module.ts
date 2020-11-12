import { WelcomeComponent } from './home/welcome.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductListComponent } from './products/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProdutDetailComponent } from './products/produt-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProdutDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', component: ProdutDetailComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
