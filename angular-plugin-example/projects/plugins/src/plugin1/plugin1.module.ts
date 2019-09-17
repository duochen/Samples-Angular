import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Plugin1Component } from './plugin1.component';

@NgModule({
  declarations: [
    Plugin1Component
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [Plugin1Component]
})
export class AppModule { 
  static entry = Plugin1Component;
}
