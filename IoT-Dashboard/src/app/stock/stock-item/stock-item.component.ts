import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterContentChecked, AfterViewInit, AfterContentInit  } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StockItemComponent implements OnInit, OnChanges,
                                        OnDestroy, DoCheck,
                                        AfterContentChecked,
                                        AfterContentInit,
                                        AfterViewChecked,
                                        AfterViewInit {
  @Input() public stock: Stock;
  @Output() private toggleFavoriate: EventEmitter<Stock>;

  public stockClasses;
  public stockStyles;
  public stocks : Array<Stock>;

  constructor() { 
    this.toggleFavoriate = new EventEmitter<Stock>();
  }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ]
    let diff = this.stock.price / this.stock.previousPrice - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }
    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "2.0em" : "1.0em"
    }

    console.log('Stock Item Component - On Init');
 }

  // toggleFavorite(event) {
  //   var temp: Boolean;
  //   temp = this.stock.favorite;
  //   console.log('Before we are toggling the favorite state for this stock', temp)

  //   this.stock.favorite = !temp;

  //   console.log('After we are toggling the favorite state for this stock', this.stock.favorite)    
  //   console.log('The event is: ', event)    
  // }

  onToggleFavoriteOnStock(event) {
    this.toggleFavoriate.emit(this.stock);
  }

  toggleFavorite(event, index) {
    var temp: Boolean;
    temp = this.stocks[index].favorite;
    console.log('Before we are toggling the favorite state for this stock', temp)

    this.stocks[index].favorite = !temp;

    console.log('After we are toggling the favorite state for this stock', this.stock.favorite)    
    console.log('The event is: ', event)    
  }  

  trackStockByCode(index, stock) {
    return stock.Code;
  }

  changeStockPrice() {
    this.stock.price += 5;
  }

  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }  

  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
  }  
}
