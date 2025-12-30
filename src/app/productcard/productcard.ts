import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Product } from '../app';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
  @Input() filtered!: Product[];
  @Input() selectedProductId!: number | null;
  @Output() addcart = new EventEmitter<Product>();
  @Output() emitProductId = new EventEmitter<number>();

  onEmitProductId(product: Product) {
    this.emitProductId.emit(product.id);
  }
}
