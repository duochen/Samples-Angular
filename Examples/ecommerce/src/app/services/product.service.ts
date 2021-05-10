import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/product');
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return  this.httpClient.patch('/api/product/' + id, {changeInQuantity: changeInQuantity});
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('/api/product', product);
  }
}
