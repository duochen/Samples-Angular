import { Component, OnInit } from '@angular/core';
import { Stock } from 'app/model/stock';
import { StockService } from 'app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  onToggleStock(stock: Stock) {
    this.stockService.toggleFavorite(stock);
  }
}
