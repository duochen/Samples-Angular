import { Component } from '@angular/core';
import { FooterClickedEvent } from './components/footer/footer-clicked.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleABC = 'app';
  headerClicks = 0;
  footerClicks = 0;

  onTitleClicked() {
    this.headerClicks++;
  }

  onFooterClicked(event: FooterClickedEvent) {
    this.footerClicks = event.totalFooterClicks;
  }

  getTitle() {
    return this.titleABC;
  }
}
