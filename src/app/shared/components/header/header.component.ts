import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDarkMode: boolean = false;
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }

  public darkMode(darkMode: boolean): void {
    this.darkModeService.darkMode = darkMode;
  }
}
