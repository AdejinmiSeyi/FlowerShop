import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Searchinput } from '../searchinput/searchinput';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Searchinput],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() cartCount!: number;
  @Output() secondTextEmitter = new EventEmitter<string>();

  receiVER(eventt: string) {
    this.secondTextEmitter.emit(eventt);
  }
}
