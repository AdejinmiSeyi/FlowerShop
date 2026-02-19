import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Productcard } from './productcard/productcard';
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Productcard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ecomm');

  textsearch: string = '';

  cartArray = new Set<Product>([]);

  selectedProductId: number | null = null;

  products: Product[] = [
  {
    id: 1,
    name: 'Rose Bouquet',
    description:
      'Elegant bouquet of fresh red roses, perfect for romantic occasions and heartfelt gestures.',
    price: 45,
    imageUrl:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&auto=format&fit=crop', // red rose bouquet
  },
  {
    id: 2,
    name: 'Tulip Arrangement',
    description:
      'Bright and cheerful tulip arrangement to bring joy and color to any space.',
    price: 35,
    imageUrl:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop', // colorful tulips
  },
  {
    id: 3,
    name: 'Orchid Plant',
    description:
      'Exquisite potted orchid with long-lasting blooms and graceful beauty.',
    price: 60,
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&auto=format&fit=crop', // potted orchid
  },
  {
    id: 4,
    name: 'Sunflower Bouquet',
    description:
      'Vibrant bouquet of golden sunflowers that radiates warmth, happiness, and positivity.',
    price: 40,
    imageUrl:
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&auto=format&fit=crop', // sunflower bouquet
  },
  {
    id: 5,
    name: 'White Lily Arrangement',
    description:
      'Elegant white lilies arranged beautifully, symbolizing purity and refined grace.',
    price: 50,
    imageUrl:
      'https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&auto=format&fit=crop', // white lilies
  },
  {
    id: 6,
    name: 'Lavender Bouquet',
    description:
      'Fragrant lavender bouquet with calming tones, perfect for relaxation and thoughtful gifts.',
    price: 30,
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&auto=format&fit=crop', // lavender flowers
  },
  {
    id: 7,
    name: 'Peony Blossom Bundle',
    description:
      'Soft pink peony blossoms bundled together for a romantic and luxurious touch.',
    price: 55,
    imageUrl:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&auto=format&fit=crop', // pink peonies
  },
  {
    id: 8,
    name: 'Daisy Delight',
    description:
      'Fresh white and yellow daisies arranged in a cheerful bouquet to brighten any room.',
    price: 28,
    imageUrl:
      'https://images.unsplash.com/photo-1553520929-df493916da94?q=80&w=1025&auto=format&fit=crop', // daisy bouquet
  },
  {
    id: 9,
    name: 'Mixed Wildflower Basket',
    description:
      'Colorful assortment of seasonal wildflowers arranged in a charming rustic basket.',
    price: 48,
    imageUrl:
      'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=400&auto=format&fit=crop', // wildflower arrangement
  },
  {
    id: 10,
    name: 'Carnation Charm',
    description:
      'Classic carnation bouquet featuring rich hues and long-lasting blooms.',
    price: 32,
    imageUrl:
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&auto=format&fit=crop', // carnation bouquet
  },
];


  filteredArray: Product[] = [...this.products];

  receiVER2(eventt: string) {
    this.textsearch = eventt;
    this.filteredArray = this.products.filter((products) =>
      products.name.toLocaleLowerCase().includes(this.textsearch.toLocaleLowerCase()),
    );
  }

  recievedProduct(recievedProduct: Product) {
    this.cartArray.add(recievedProduct);
  }

  receiveId(event: number) {
    this.selectedProductId = event;
  }

  inCart = (recievedProduct: Product): boolean => {
    return this.cartArray.has(recievedProduct);
  };
}
