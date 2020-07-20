import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCounterDecBtn]'
})
export class CounterDecBtnDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
