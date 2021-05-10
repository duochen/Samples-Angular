export class Widget {
  private id: number;
  private x: number;
  private y: number;

  constructor(id, x, y) {
    this.id = id;
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class TextBox extends Widget {
  private text: string;

  constructor(id, x, y, text) {
    super(id, x, y);
    this.text = text;
  }
}

export class ImageBox extends Widget {
  private width: number;
  private height: number;

  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.setSize(width, height);
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  reset() {
    this.setPosition(0, 0);
    this.setSize(0, 0);
  }
}
