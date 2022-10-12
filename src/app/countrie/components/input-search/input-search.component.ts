import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FiltersService } from '../../services/filters.service';
import { SearchsService } from '../../services/searchs.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit, OnDestroy {
  public filterByRegionSubscriptions: Subscription = new Subscription();
  public searchSubscription: Subscription = new Subscription();
  public nameCountry: FormControl = new FormControl('');

  constructor(
    private searchService: SearchsService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.filterByRegionSubscriptions =
      this.filtersService.filterByRegion$.subscribe((__) => {
        this.nameCountry.setValue('');
      });
  }

  public search() {
    this.searchService.searchCountry = this.nameCountry.value;
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.filterByRegionSubscriptions.unsubscribe();
  }
}
