import { LogClass, LogClassWithParams, LogMethod, LogMethodWithParams, LogAccessor, LogAccessorWithParams, LogProperty, LogParameter } from '../decorator/LogClass'

@LogClass
@LogClassWithParams('BEGIN:', ':END')
@LogClassWithParams('[', ']')
export class TextWidget {
  _text: string;
  @LogProperty
  id: string;

  constructor(text: string=`default text`, id='my id') {
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
  render(@LogParameter postionX: number, @LogParameter positionY: number) {
    console.log(`Rendering text: ${this._text}`);
  }
}
