import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryService } from '../services/country.service';
import { CountryResponse } from '../interfaces/country';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  public detailSubscription: Subscription = new Subscription();
  private nameCountry: string = '';
  public country: CountryResponse[] = [];
  public nativeName: string = '';
  public currencies: string = '';
  public languages: string = '';
  public borders: string[] = [];
  public loading: boolean = false;

  constructor(
    private countryService: CountryService,
    private activedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.nameCountry = this.activedRouter.snapshot.params['name'];
    this.getDetail(this.nameCountry);
  }

  private getDetail(name: string) {
    this.loading = true;
    this.detailSubscription = this.countryService
      .getCountryByName(name)
      .subscribe((data) => {
        this.country = data;
        if (data.length > 0) {
          if (data[0].name.nativeName) {
            this.nativeName = Object.values(data[0].name.nativeName)[0].common;
          }
          if (data[0].currencies) {
            this.currencies = Object.values(data[0].currencies)[0].name;
          }
          if (data[0].languages) {
            this.languages = Object.values(data[0].languages).join();
            this.borders = Object.values(data[0].languages);
          }
        }
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.detailSubscription.unsubscribe();
    this.nameCountry = '';
  }
}
