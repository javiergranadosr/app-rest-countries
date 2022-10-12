import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private $filterByRegion: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  constructor() {}

  public set filterByRegion(region: string) {
    this.$filterByRegion.next(region);
  }

  public get filterByRegion$(): Observable<string> {
    return this.$filterByRegion.asObservable();
  }
}
