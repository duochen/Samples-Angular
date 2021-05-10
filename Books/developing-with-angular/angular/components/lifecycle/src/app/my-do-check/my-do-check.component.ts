import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-my-do-check',
  templateUrl: './my-do-check.component.html',
  styleUrls: ['./my-do-check.component.css']
})
export class MyDoCheckComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    this.checks++;
    if (this.previousUser.firstName !== this.currentUser.firstName
       || this.previousUser.lastName !== this.currentUser.lastName) {
       this.updates ++;
       this.previousUser = Object.assign({}, this.currentUser);
       }

  }
  
  checks = 0;
  updates = 0;

  currentUser = {
    firstName: 'John',
    lastName: 'Doe'
  };

  previousUser = {
    firstName: '',
    lastName: ''
  }
  constructor() { }

  ngOnInit() {
  }

   updateUser() {
     this.currentUser = {
       firstName: 'James',
       lastName: 'Bond'
     };
   } 
}
