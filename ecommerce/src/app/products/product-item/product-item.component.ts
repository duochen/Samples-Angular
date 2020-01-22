import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;
  @Output() private increment: EventEmitter<Product>;
  @Output() private decrement: EventEmitter<Product>;
  public productClasses;
  public buttonStyles;
  public person: string;
  private quantities: Array<number>;

  constructor() { 
    this.increment = new EventEmitter<Product>();
    this.decrement = new EventEmitter<Product>();
  }

  ngOnInit() {
    this.productClasses = {
      "sale": this.product.isOnSale,
      "notsale": !this.product.isOnSale,
    };
    
    this.buttonStyles = {
      "color": "red",
      "font-size": "1.2em"
    }

    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    }

    this.person = "Duo";
  }

  increatmentInCart(event) {
    this.product.quantityInCart++;
    this.increment.emit(this.product);
  }

  decrementInCart(event) {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
      this.decrement.emit(this.product);      
    }
  }

  switchSale(event) {
    this.product.isOnSale = !this.product.isOnSale;
  }

  calculateClasses() {
    return {
      'sale': this.product.isOnSale,
      'notsale': !this.product.isOnSale
    }
  }

}
