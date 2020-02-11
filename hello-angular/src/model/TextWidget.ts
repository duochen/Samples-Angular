import { LogClass, LogClassWithParams, LogMethod, LogMethodWithParams, LogAccessor, LogAccessorWithParams } from '../decorator/LogClass'

@LogClass
@LogClassWithParams('BEGIN:', ':END')
@LogClassWithParams('[', ']')
export class TextWidget {
  _text: string;

  constructor(text: string=`default text`) {
    this._text = text;
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
