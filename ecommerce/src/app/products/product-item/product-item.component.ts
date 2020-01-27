import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();
  public productClasses;
  public buttonStyles;

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
  }

  increatmentInCart() {
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.quantityChange.emit({product: this.product, changeInQuantity: -1});
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
