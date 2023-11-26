import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-all-countries',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './all-countries.component.html',
  styleUrl: './all-countries.component.css'
})
export class AllCountriesComponent implements OnInit {

  countries: any[] = [];
  searchWord: any = null;
  tempCountries: any[] = [];

  constructor(private dataService: DataService, private sharingService: SharingService) { }

  countryObserver: any = {
    next: (countries: any) => this.countries = countries,
    error: (err: any) => console.log(err),
  }

  ngOnInit() {
    this.dataService.getAllCountries().subscribe(this.countryObserver);
    this.sharingService.data$.subscribe(data => {
      this.countries = this.countries.filter(country => {
        if (country.name.common.includes(data)) return country;
      })
    })
  }
}
