import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryResponse } from '../interfaces/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home-countrie',
  templateUrl: './home-countrie.component.html',
  styleUrls: ['./home-countrie.component.scss'],
})
export class HomeCountrieComponent implements OnInit, OnDestroy {
  public countrySubscription: Subscription = new Subscription();
  public countries: CountryResponse[] = [];
  public loading: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loading = true;
    this.countrySubscription = this.countryService
      .getCountries()
      .subscribe((data) => {
        this.countries = data;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
    this.countries = [];
  }
}
