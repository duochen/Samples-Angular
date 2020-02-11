import { AboutComponent } from './about/about.component';
import { Component, InjectionToken, Inject } from '@angular/core';
import { GreetingService } from './../services/GreetingService';
import { LogService } from './../services/LogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'app';

  constructor(private greetingService: GreetingService, private logService: LogService) {
    console.log(this.greetingService.sayHello('Duo'));
  }
}
