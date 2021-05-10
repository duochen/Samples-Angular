import { Component, OnInit } from '@angular/core';
import { SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit  } from '@angular/core';
import { Stock } from './model/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy,
                                    DoCheck, AfterContentChecked,
                                    AfterContentInit, AfterViewChecked,
                                    AfterViewInit {
  title = 'IoT-Dashboard';

  public stockObj : Stock;
  private counter: number = 1;

  ngOnInit() {
    this.stockObj = new Stock('Test Stock Company', "TSC", 85, 80, 'NASAQ');
    console.log('App Component - On Init')
  }

  onToggleFavoriteOnAppComponent(stock: Stock) {
    console.log('Favorite for stock', stock, ' was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  changeStockObject() {
    this.stockObj = new Stock('Test Stock Company - ' + this.counter++, "TSC", 85, 80, "NASAQ");
  }

  changeStockPrice() {
    this.stockObj.price += 10;
  }

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);
  }  

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }
}
