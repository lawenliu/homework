import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="inventory-app">
    (Products will go here soon)
  </div>
  `
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      "NICEHAT",
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    );
  }
}
