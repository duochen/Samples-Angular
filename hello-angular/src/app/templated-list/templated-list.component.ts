import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-templated-list',
  templateUrl: './templated-list.component.html',
  styleUrls: ['./templated-list.component.css']
})
export class TemplatedListComponent implements OnInit {
  @Input()
  items: Array<{title: string}> = [];

  constructor() { }

  ngOnInit() {
  }

}
