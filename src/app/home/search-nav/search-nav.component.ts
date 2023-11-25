import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.css'
})
export class SearchNavComponent {

  arrowIconName: string = 'keyboard_arrow_left'
  showDropdown: boolean = false

  onClickDropdown() {
    this.showDropdown = !this.showDropdown ? true : false;
    this.arrowIconName = this.showDropdown ? 'keyboard_arrow_down' : 'keyboard_arrow_left';
  }
}
