import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCounterIncBtn]'
})
export class CounterIncBtnDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
