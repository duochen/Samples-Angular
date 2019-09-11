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
  public priviousPrice: number;

  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85
    this.priviousPrice = 80;
  }

}
