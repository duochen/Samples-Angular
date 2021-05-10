import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist-item',
  templateUrl: './mylist-item.component.html',
  styleUrls: ['./mylist-item.component.css']
})
export class MylistItemComponent implements OnInit {
  title = "my list-item works!";
  constructor() { }

  ngOnInit() {
  }

}
