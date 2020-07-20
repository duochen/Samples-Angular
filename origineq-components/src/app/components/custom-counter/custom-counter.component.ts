import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

import { CounterValueDirective } from './counter-value.directive';
import { CounterIncBtnDirective } from './counter-inc-btn.directive';
import { CounterDecBtnDirective } from './counter-dec-btn.directive';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCounterComponent {
  @ContentChild(CounterValueDirective, { static: true }) counterValueDir: CounterValueDirective;
  @ContentChild(CounterIncBtnDirective, { static: true }) counterIncBtnDir: CounterIncBtnDirective;
  @ContentChild(CounterDecBtnDirective, { static: true }) counterDecBtnDir: CounterDecBtnDirective;

  @Input() title = 'Counter';
  @Input() value = 0;
  @Output() changed = new EventEmitter<number>();

  get counterValueTpl(): TemplateRef<any> {
    return this.counterValueDir && this.counterValueDir.tpl;
  }

  get counterIncBtnTpl(): TemplateRef<any> {
    return this.counterIncBtnDir && this.counterIncBtnDir.tpl;
  }

  get counterDecBtnTpl(): TemplateRef<any> {
    return this.counterDecBtnDir && this.counterDecBtnDir.tpl;
  }

  get counterValueTplContext(): object {
    return { $implicit: this.value };
  }

  get counterIncBtnTplContext(): object {
    return { $implicit: () => this.increment() };
  }

  get counterDecBtnTplContext(): object {
    return { $implicit: () => this.decrement() };
  }

  increment() {
    this.updateValue('inc');
  }

  decrement() {
    this.updateValue('dec');
  }

  private updateValue(action: 'inc' | 'dec') {
    const delta = (action === 'inc') ? 1 : -1;
    this.value += delta;
    this.changed.emit(this.value);
  }
}
