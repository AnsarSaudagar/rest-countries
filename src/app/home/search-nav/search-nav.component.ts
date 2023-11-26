import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-search-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.css'
})
export class SearchNavComponent {

  arrowIconName: string = 'keyboard_arrow_left';
  showDropdown: boolean = false;
  searchCountry: any = null;

  constructor(private sharingService: SharingService) { }

  //On CLicking the dropdown
  onClickDropdown(): void {
    this.showDropdown = !this.showDropdown ? true : false;
    this.arrowIconName = this.showDropdown ? 'keyboard_arrow_down' : 'keyboard_arrow_left';
  }

  onChangeSearchCountry() {
    this.sharingService.shareCountry(this.searchCountry);
  }
}
