import { LogClass } from '../decorator/LogClass'

@LogClass
export class TextWidget {
  text: string;

  constructor(text: string=`default text`) {
    this.text = text;
  }

  render() {
    console.log(`Rendering text: ${this.text}`);
  }
}
