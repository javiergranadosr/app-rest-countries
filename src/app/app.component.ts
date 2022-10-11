import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
} from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'app-rest-countries';

  constructor(
    private darkModeService: DarkModeService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      if (darkMode) {
        this.darkMode();
      } else {
        this.lightMode();
      }
    });
  }

  private lightMode() {
    this.document.body.classList.remove('dark');
    this.document.body.classList.remove('bg-slate-900');
    this.document.body.classList.add('bg-slate-100');
  }

  private darkMode() {
    this.document.body.classList.add('dark');
    this.document.body.classList.add('bg-slate-900');
    this.document.body.classList.remove('bg-slate-100');
  }
}
