import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

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

  constructor(private dataService: DataService) { }

  countryObserver: any = {
    next: (countries: any) => this.countries = countries,
    error: (err: any) => console.log(err)
  }

  ngOnInit() {
    this.dataService.getAllCountries().subscribe(this.countryObserver);
  }


}
