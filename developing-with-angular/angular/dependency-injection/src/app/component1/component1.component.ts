import { MylogService } from './../services/mylog.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(logService: MylogService) {
    logService.info('Component 1 created');
  }

  ngOnInit() {
  }

}
