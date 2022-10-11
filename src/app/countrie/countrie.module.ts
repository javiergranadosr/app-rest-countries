import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrieRoutingModule } from './countrie-routing.module';
import { HomeCountrieComponent } from './home-countrie/home-countrie.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    HomeCountrieComponent,
    InputSearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    CountrieRoutingModule
  ]
})
export class CountrieModule { }
