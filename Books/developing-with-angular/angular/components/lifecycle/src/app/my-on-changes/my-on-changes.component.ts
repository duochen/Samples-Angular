import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-on-changes',
  templateUrl: './my-on-changes.component.html',
  styleUrls: ['./my-on-changes.component.css']
})
export class MyOnChangesComponent implements OnInit, OnChanges {

  @Input()
  text = 'hello world';

  previous: string;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.text) {
      this.previous = changes.text.previousValue;
    }
  }  
}
