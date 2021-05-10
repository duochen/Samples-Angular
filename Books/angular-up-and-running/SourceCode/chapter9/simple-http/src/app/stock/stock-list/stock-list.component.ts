import { Component, OnInit } from '@angular/core';
import { StockService } from 'app/services/stock.service';
import { AuthService } from 'app/services/auth.service';
import { Stock } from 'app/model/stock';
import { Observable } from 'rxjs/Observable';
import { share, debounceTime, switchMap, distinctUntilChanged, startWith } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<Stock[]>;
  public searchString: string = '';

  private searchTerms: Subject<string> = new Subject();

  constructor(private stockService: StockService,
              private authService: AuthService) { }

  ngOnInit() {
    this.fetchStocks();
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  fetchStocks() {
    this.stocks$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.stockService.getStocks(query)),
      share()
      );
    this.stocks$.forEach(s => console.log(s));
  }

  setAuthToken() {
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.stockService.makeFailingCall()
      .subscribe((res) => console.log('Successfully made failing call', res),
                 (err) => console.error("Error making failing call", err));
  }
}
