import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-on-init',
  templateUrl: './my-on-init.component.html',
  styleUrls: ['./my-on-init.component.css']
})
export class MyOnInitComponent implements OnInit {
  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
    console.log("Calling from ngOnInit");ng
  }

}
