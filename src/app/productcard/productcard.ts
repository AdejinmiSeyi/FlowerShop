import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../app';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
  @Input() recievedFromParent!: Product[];
  @Input() isInCart!: (product: Product) => boolean;
  @Input() selectedId!: number | null;
  @Output() emitProduct = new EventEmitter<Product>();
  @Output() IdEmitter = new EventEmitter<number>();

  onClickCard(clickedProduct: Product) {
    this.emitProduct.emit(clickedProduct);
  }

  emitId(productId: number) {
    this.IdEmitter.emit(productId);
  }
}
