import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from "ngx-loading";


import { CountrieRoutingModule } from './countrie-routing.module';
import { HomeCountrieComponent } from './home-countrie/home-countrie.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { EmptyResultComponent } from './components/empty-result/empty-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    HomeCountrieComponent,
    InputSearchComponent,
    FilterComponent,
    CardCountryComponent,
    EmptyResultComponent,
    DetailComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    CountrieRoutingModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule
  ],
})
export class CountrieModule {}
