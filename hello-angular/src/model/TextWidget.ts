import { LogClass, LogClassWithParams } from '../decorator/LogClass'

@LogClass
@LogClassWithParams('BEGIN:', ':END')
@LogClassWithParams('[', ']')
export class TextWidget {
  text: string;

  constructor(text: string=`default text`) {
    this.text = text;
  }

  render() {
    console.log(`Rendering text: ${this.text}`);
  }
}
