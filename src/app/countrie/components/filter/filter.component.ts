import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Region } from '../../interfaces/region';
import { CountryService } from '../../services/country.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  public regions: Region[] = [];
  public filterByRegionSubscriptions: Subscription = new Subscription();
  public inputFilter: FormControl = new FormControl('');

  constructor(
    private countryService: CountryService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.regions = this.countryService.regions;
    this.filterByRegionSubscriptions = this.inputFilter.valueChanges.subscribe(
      (region) => {
        this.filtersService.filterByRegion = region;
      }
    );
  }

  ngOnDestroy(): void {
    this.regions = [];
    this.filterByRegionSubscriptions.unsubscribe();
  }
}
