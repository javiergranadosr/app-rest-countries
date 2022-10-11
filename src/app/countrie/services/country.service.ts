import { Injectable } from '@angular/core';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  public get regions(): Region[] {
    return [
      {
        key: 'africa',
        name: 'Africa',
      },
      {
        key: 'americas',
        name: 'America',
      },
      {
        key: 'asia',
        name: 'Asia',
      },
      {
        key: 'europe',
        name: 'Europe',
      },
      {
        key: 'oceania',
        name: 'Oceania',
      },
    ];
  }
}
