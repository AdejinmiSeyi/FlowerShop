import { Component, signal, Input, Output, EventEmitter } from '@angular/core';
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
  protected readonly title = signal('seamfix-angular-app');
  //@Output() lastEmit = new EventEmitter<string>();

  cartarray: Product[] = [];

  products: Product[] = [
    {
      id: 1,
      name: 'Smart Watch',
      description: 'A smart watch used for checking time. Aslo helps fulfil fitness goals. ',
      price: 120,
      imageUrl:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Headphone',
      description: 'A peice of high end noise cancelling headphone. Enjoy music at its finest.',
      price: 80,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Laptop',
      description:
        'A mordern laptop with a powerful chip for task processing. Has an extremely long battery life.',
      price: 900,
      imageUrl:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Camera',
      description: 'A 3D mockup of a camera. This sample can used for production of kiddies toys.',
      price: 650,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1666739388630-ca88b1e82eb2?w=400&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Keyboard',
      description:
        'A mordern Keyboard with tactile feedback. Increases your typing speed and boots productivity.',
      price: 50,
      imageUrl:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Mouse',
      description:
        'This wireless mouse makes your important projects faster. Feels good on the hand, made of premium material.',
      price: 30,
      imageUrl:
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Phone',
      description:
        'A high-end powerful smartphone with a fast processor and mordern display. The cameras on the back shoot beautiful images ',
      price: 700,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=400&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'Tablet',
      description:
        'This tablet has a sleek design and powerful display to serve all your needs. A perfect substitue for your laptop on the go.',
      price: 400,
      imageUrl:
        'https://images.unsplash.com/photo-1630548862870-f77276c93f33?w=400&auto=format&fit=crop',
    },
    {
      id: 9,
      name: 'Speaker',
      description:
        'A Marshall speaker. Designed by the best sound engineers for n unrivalled multimedia experience.',
      price: 90,
      imageUrl:
        'https://images.unsplash.com/photo-1692651763027-72aeb12130d7?w=400&auto=format&fit=crop',
    },
    {
      id: 10,
      name: 'Charger',
      description:
        'A portable charger with power delivery. The output is powerful enough to charge all the power hungry devices.',
      price: 20,
      imageUrl: 'https://images.unsplash.com/photo-1709236709044-159f627b7971?',
    },
  ];

  filteredArray: Product[] = [...this.products];
  selectedProductId: number | null = null;

  onFilterSearch(typedtext: string) {
    this.filteredArray = this.products.filter((p) =>
      p.name.toLowerCase().includes(typedtext.toLowerCase())
    );
  }

  onRootAddToCartMethod(product: Product) {
    this.cartarray.push(product);
    //console.log(this.cartarray);
  }

  onSelectedCard(id: number) {
    this.selectedProductId = id;
  }
}
