import { DashboardService } from './../dashboard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../dashboard.service'


@NgModule({
  declarations: [
    AboutComponent,
    MyProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    MyProfileComponent,
    DashboardComponent
  ],
  providers: [DashboardService]
})
export class AdminModule
{

}
