import { Component, OnInit, Input, ContentChild, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { MylistItemComponent } from '../mylist-item/mylist-item.component';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit, AfterContentInit {

  @ContentChild(MylistItemComponent)
  firstListItem: MylistItemComponent;

  @ContentChildren(MylistItemComponent, {static: false})
  itemLists: QueryList<MylistItemComponent>;

  @Input()
  title = 'My List Title';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.firstListItem.title = "first item title";
    let i = 0;
    this.itemLists.forEach((t)=> {
      t.title = "Duo title #" + (i++);
    })
  }
}
