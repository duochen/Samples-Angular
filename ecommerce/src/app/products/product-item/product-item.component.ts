import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  public name: string;
  public price: number;
  public imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.price = 11.2;
    this.imageUrl = "https://www.gstatic.com/webp/gallery3/1.png"
  }

}
