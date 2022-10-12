import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
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
      {
        path: 'detail/:name',
        component: DetailComponent,
        title: 'Detail country',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountrieRoutingModule {}
