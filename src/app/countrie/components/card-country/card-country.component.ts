import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryResponse } from '../../interfaces/country';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss'],
})
export class CardCountryComponent implements OnInit {
  @Input() public country!: CountryResponse;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public viewCountry(name: string) {
    this.router.navigate(['countries', 'detail', name]);
  }
}
