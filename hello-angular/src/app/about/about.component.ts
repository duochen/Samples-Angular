import { TextWidget } from './../../model/TextWidget';
import { Component, OnInit } from '@angular/core';

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
  }

}
