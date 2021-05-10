import { LogClass, LogClassWithParams, LogMethodWithParams, LogAccessorWithParams, LogProperty, LogParameter } from '../decorator/LogClass'

@LogClass
@LogClassWithParams('BEGIN:', ':END')
@LogClassWithParams('[', ']')
export class TextWidget {
  _text: string;
  @LogProperty
  id: string;

  constructor(text: string=`default text`, id: string= 'my id') {
    this._text = text;
    this.id = id;
  }

  // @LogAccessor
  @LogAccessorWithParams('hello')
  @LogAccessorWithParams('world')
  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  // @LogMethod
  @LogMethodWithParams('hello')
  @LogMethodWithParams('world')
  render() {
    console.log(`Rendering text: ${this._text}`);
  }
}
