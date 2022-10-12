import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { CountryResponse } from '../interfaces/country';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

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

  public getCountries(): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${this.baseUrl}/all`).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        return of([]);
      })
    );
  }

  public getCountriesByRegion(region: string): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${this.baseUrl}/region/${region}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        return of([]);
      })
    );
  }

}
