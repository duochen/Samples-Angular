import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-host-events',
  templateUrl: './my-host-events.component.html',
  styleUrls: ['./my-host-events.component.css'],
  host: {
    class: 'host-events',
    '[class.is-invalid]': 'isInvalid',
    '[class.is-readonly]': 'isReadonly',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(window:resize)': 'onWindowResize()',
    'role': 'button',
    'aria-label': "Demo button",
    '[innerHTML]': 'value'
  }
})
export class MyHostEventsComponent implements OnInit {

  value = 'Custom Value';

  isInvalid: boolean = true;
  isReadonly: boolean = true;

  color = 'black';

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter() {
    // console.log("Mouse enter");
    this.color = 'red';
  }

  onMouseLeave() {
    // console.log("Mouse leave");
    this.color = 'black';
  }

  onWindowResize() {
    console.log("window resize");
  }
}
