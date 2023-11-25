import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  regionApi: string = "https://restcountries.com/v3.1/region/";
  coutryApi: string = "https://restcountries.com/v3.1/alpha/"
  allCountryApi: string = "https://restcountries.com/v3.1/all";
  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.allCountryApi);
  }

  getCountry(code: string) {
    return this.http.get(this.coutryApi + code)
  }

  getCountriesByRegion(region: string) {
    return this.http.get(this.regionApi + region);
  }
}
