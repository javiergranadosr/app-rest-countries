import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryResponse } from '../interfaces/country';
import { CountryService } from '../services/country.service';
import { FiltersService } from '../services/filters.service';
import { SearchsService } from '../services/searchs.service';

@Component({
  selector: 'app-home-countrie',
  templateUrl: './home-countrie.component.html',
  styleUrls: ['./home-countrie.component.scss'],
})
export class HomeCountrieComponent implements OnInit, OnDestroy {
  public countrySubscription: Subscription = new Subscription();
  public filterByRegionSubscriptions: Subscription = new Subscription();
  public searchSubscription: Subscription = new Subscription();
  public countries: CountryResponse[] = [];
  public data: CountryResponse[] = [];
  public loading: boolean = false;

  constructor(
    private countryService: CountryService,
    private filtersService: FiltersService,
    private searchService: SearchsService
  ) {}

  ngOnInit(): void {
    this.filterByRegionSubscriptions =
      this.filtersService.filterByRegion$.subscribe((region) => {
        this.countries = [];
        if (region && region.length > 0) {
          this.getAllCountriesByRegion(region);
        } else {
          this.getAllCountries();
        }
      });
    this.getCountriesBySearchName();
  }

  private getAllCountries() {
    this.loading = true;
    this.countrySubscription = this.countryService
      .getCountries()
      .subscribe((data) => {
        this.data = data;
        this.countries = data;
        this.loading = false;
      });
  }

  private getAllCountriesByRegion(region: string) {
    this.loading = true;
    this.countrySubscription = this.countryService
      .getCountriesByRegion(region)
      .subscribe((data) => {
        this.data = data;
        this.countries = data;
        this.loading = false;
      });
  }

  private getCountriesBySearchName() {
    this.searchSubscription = this.searchService.searchCountry$.subscribe(
      (countryName) => {
        if (countryName.length > 0) {
          const pattern: RegExp = new RegExp(`${countryName}.*`, 'i');
          this.countries = this.data.filter((country) =>
            pattern.test(country.name.common)
          );
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.filterByRegionSubscriptions.unsubscribe();
    this.countrySubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.countries = [];
    this.data = [];
    this.loading = false;
  }
}
