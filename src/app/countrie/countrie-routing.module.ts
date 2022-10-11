import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCountrieComponent } from './home-countrie/home-countrie.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeCountrieComponent,
        title: 'Home Countries',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountrieRoutingModule {}
