import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.users.subscribe(users => {
        if (users.length == 0) return;
        this.user = this.userService.userById(id);
      })

    })
  }

}
