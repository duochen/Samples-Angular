import { LogClass, LogClassWithParams, LogMethod, LogMethodWithParams } from '../decorator/LogClass'

@LogClass
@LogClassWithParams('BEGIN:', ':END')
@LogClassWithParams('[', ']')
export class TextWidget {
  text: string;

  constructor(text: string=`default text`) {
    this.text = text;
  }

  // @LogMethod
  @LogMethodWithParams('hello')
  @LogMethodWithParams('world')
  render() {
    console.log(`Rendering text: ${this.text}`);
  }
}
