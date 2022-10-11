import { Component, OnDestroy, OnInit } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  public regions: Region[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.regions = this.countryService.regions;
  }

  ngOnDestroy(): void {
    this.regions = [];
  }
}
