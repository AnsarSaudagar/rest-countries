import { Injectable } from '@angular/core';
import { Subject, count } from 'rxjs';

@Injectable()
export class SharingService {

  private search = new Subject<string>();
  data$ = this.search.asObservable();

  shareCountry(country: string): void {
    this.search.next(country);
  }
}
