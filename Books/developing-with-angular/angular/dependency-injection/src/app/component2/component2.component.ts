import { Component, OnInit } from '@angular/core';
import { MyCustomLogService } from './../services/my-custom-log.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private myCustomLogService: MyCustomLogService) {
    this.myCustomLogService.info('Component 2 created!!!');
  }

  ngOnInit() {

  }

}
