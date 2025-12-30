import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchinput.html',
  styleUrl: './searchinput.css',
})
export class Searchinput {
  searchedText = '';
  @Output() emitSearchedText = new EventEmitter();

  onSearchBegins() {
    this.emitSearchedText.emit(this.searchedText);
  }
}
