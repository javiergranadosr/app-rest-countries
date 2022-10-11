import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isDarkMode: boolean = false;
  public darkModeSubscription: Subscription = new Subscription();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeSubscription = this.darkModeService.darkMode$.subscribe(
      (darkMode) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  public darkMode(darkMode: boolean): void {
    this.darkModeService.darkMode = darkMode;
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
    this.darkModeService.darkMode = false;
  }
}
