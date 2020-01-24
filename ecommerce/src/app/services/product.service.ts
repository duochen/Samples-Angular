import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: "Test Product - 1",
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 50,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: 'Test Product - 2',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 150,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Test Product - 3',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 250,
        isOnSale: true,
        quantityInCart: 0
      }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
