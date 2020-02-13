import { TextWidget } from './../../model/TextWidget';
import { Component, OnInit } from '@angular/core';
import { Widget} from '../ES6/Widget';
import { FilterBook} from '../ES6/Expression';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [TextWidget],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const widget = new TextWidget();
    widget.render();

    this.ES6_Test02();
  }

  ES6_Test01() {
    let myWidget = new Widget(1, 10, 20);
  }

  ES6_Test02() {
    FilterBook();
  }

  ES6_Test03() {
    let button = document.getElementById('submit-button');
    button.addEventListener("click", () => {
      console.log('Button is clicked');
    });
  }
}
