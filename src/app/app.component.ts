import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'app-rest-countries';
  @ViewChild('darkMode') darkMode!: ElementRef;

  constructor(
    private darkModeService: DarkModeService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      if (darkMode) {
        this.renderer.addClass(this.darkMode.nativeElement, 'dark');
      } else {
        this.renderer.removeClass(this.darkMode.nativeElement, 'dark');
      }
    });
  }
}
