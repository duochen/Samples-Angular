import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;
  public productClasses;
  public buttonStyles;
  public person: string;
  private quantities: Array<number>;

  constructor() { }

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

  increatmentInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
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
