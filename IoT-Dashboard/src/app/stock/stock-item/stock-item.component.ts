import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    let diff = this.stock.price / this.stock.previousPrice - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negatvie": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }
 }

  toggleFavorite(event) {
    var temp: Boolean;
    temp = this.stock.favorite;
    console.log('Before we are toggling the favorite state for this stock', temp)

    this.stock.favorite = !temp;

    console.log('After we are toggling the favorite state for this stock', this.stock.favorite)    
    console.log('The event is: ', event)    
  }
}
