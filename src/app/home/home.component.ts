import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavComponent } from './search-nav/search-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
