import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85
    this.previousPrice = 80;
    this.positiveChange = this.price > this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite() {
    var temp: Boolean;
    temp = this.favorite;
    console.log('Before we are toggling the favorite state for this stock', temp)

    this.favorite = !temp;

    console.log('After we are toggling the favorite state for this stock', this.favorite)    
  }
}
