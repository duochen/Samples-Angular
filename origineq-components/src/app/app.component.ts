import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'origineq-components';
  posts = [
    {
      id: 1,
      title: 'How to Redirect to another Page in Angular?'
    },
    {
      id: 2,
      title: 'How to Get User Agent in Angular?'
    },
    {
      id: 3,
      title: 'How To Get Client IP Address in Angular?'
    },
    {
      id: 4,
      title: 'How to get Query String from url in Angular?'
    }
  ];
}
