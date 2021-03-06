import { UserService } from './../../services/user.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean;
  public users: Observable<User[]>;

  constructor(private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private route: Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(
      [
        `
          (max-width: ${SMALL_WIDTH_BREAKPOINT}px)
        `
      ])
      .subscribe(
        (state: BreakpointState) => {
          this.isScreenSmall = state.matches;
        }
      )

    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe( data => {
      console.log(data);
      if (data.length >0) this.route.navigate(['/contactmanager', data[0].id]);
    })
  }

}
