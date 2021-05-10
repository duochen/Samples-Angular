import { MimeType } from './../typescript/myenum';
import { Component, OnInit } from '@angular/core';
import { getWiqId } from '../typescript/mymap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.test2();
  }

  test1() {
    const result = getWiqId('dev', 'e904e5d0-7119-320f-9c05-0eae3f45a90d');
    console.log('result', result);
  }

  test2() {
    const e = MimeType.JPEG;
    console.log(e.toString());
  }
}
