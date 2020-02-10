import { Component, InjectionToken, Inject } from '@angular/core';
import { GreetingService } from './../services/GreetingService';

export const greetingToken = new InjectionToken<GreetingService>('GREET_TOKEN');
export const greetingFactory = () => new GreetingService();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: greetingToken, useFactory: greetingFactory}],
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(greetingToken) private greetingService: GreetingService) {
    console.log(this.greetingService.sayHello('Duo'));
  }
}
