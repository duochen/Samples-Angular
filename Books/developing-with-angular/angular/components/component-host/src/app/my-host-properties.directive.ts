import { Directive } from '@angular/core';

@Directive
({
  selector: '[myAppHostProperties]',
  host: {
    '[innerHTML]': 'value',
    '[attr.custom1]': 'attrValue'
  }
})
export class MyHostPropertiesDirective {
  value = 'Duo Value';
  attrValue = 'some attribute value';
}

