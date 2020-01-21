import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
    this.product = {
      name: 'My Test Product',
      imageUrl: "http://via.placeholder.com/150x150",
      price: 50,
      isOnSale: true,
      quantityInCart: 0
    };
  }

  increatmentInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  }

  switchSale() {
    this.product.isOnSale = !this.product.isOnSale;
  }
}
