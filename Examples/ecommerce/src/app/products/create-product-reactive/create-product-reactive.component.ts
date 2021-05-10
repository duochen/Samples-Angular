import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product-reactive',
  templateUrl: './create-product-reactive.component.html',
  styleUrls: ['./create-product-reactive.component.scss']
})
export class CreateProductReactiveComponent implements OnInit {
  public productForm: FormGroup;
  public message: string;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.createForm();
  }

  ngOnInit() {
    this.message = "";
  }

  createForm() {
    this.productForm = this.fb.group(
      {
        name: ['', Validators.required],
        price: [0, [Validators.required, Validators.min(1)]],
        imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
        isOnSale: false
      });
  }

  createProduct(productForm) {
    if (this.productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const product: Product = productForm.value;
      this.productService.createProduct(product).subscribe((res) => {
        this.message = 'Product successfully created.';
        console.log('Triggered event emitter');
      }, (err) => {
        this.message = 'Unable to create product, please try again.';
      });
      console.log('Name Control Value', product);
    }
  }
}
