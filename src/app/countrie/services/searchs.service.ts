import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchsService {
  private $searchCountry: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  constructor() {}

  public set searchCountry(region: string) {
    this.$searchCountry.next(region);
  }

  public get searchCountry$(): Observable<string> {
    return this.$searchCountry.asObservable();
  }
}
