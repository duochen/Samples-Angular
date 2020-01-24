import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onQuantityChange(change: ProductQuantityChange) {
    const product = this.products.find(prod => {
      return change.product.id == prod.id
    });
    product.quantityInCart += change.changeInQuantity;
  }
}
