import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from "ngx-loading";


import { CountrieRoutingModule } from './countrie-routing.module';
import { HomeCountrieComponent } from './home-countrie/home-countrie.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { EmptyResultComponent } from './components/empty-result/empty-result.component';

@NgModule({
  declarations: [
    HomeCountrieComponent,
    InputSearchComponent,
    FilterComponent,
    CardCountryComponent,
    EmptyResultComponent,
  ],
  imports: [
    CommonModule,
    CountrieRoutingModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class CountrieModule {}
