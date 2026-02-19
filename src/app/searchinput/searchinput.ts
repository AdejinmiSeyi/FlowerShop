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
  searchedText: string = '';
  @Output() textEmitter = new EventEmitter<string>();

  valueChanged() {
    this.textEmitter.emit(this.searchedText);
  }
}
