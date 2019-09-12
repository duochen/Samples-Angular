import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IoT-Dashboard';

  public stockObj : Stock;

  ngOnInit() {
    this.stockObj = new Stock('Test Stock Company', "TSC", 85, 80);
  }

  onToggleFavoriteOnAppComponent(stock: Stock) {
    console.log('Favorite for stock', stock, ' was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }
}
