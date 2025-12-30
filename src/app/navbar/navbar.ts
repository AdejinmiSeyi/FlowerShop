import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Searchinput } from '../searchinput/searchinput';
import { Text } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Searchinput],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() cartCount = 0;
  @Output() emitToApp = new EventEmitter<string>();

  onEmitToApp(searchedString: string) {
    this.emitToApp.emit(searchedString);
  }
}
