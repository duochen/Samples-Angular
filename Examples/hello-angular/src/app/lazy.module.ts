import { LazyComponent } from './lazy.component';
import { NgModule } from '@angular/core';
import { routing } from './lazy.routing';

@NgModule
({
  imports: [routing],
  declarations: [LazyComponent]
})
export class LazyModule {
  constructor() {
    console.log('load LazyModule');
  }
}
