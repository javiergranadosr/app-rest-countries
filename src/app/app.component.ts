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
  @ViewChild('darkMode') dm!: ElementRef;

  constructor(
    private darkModeService: DarkModeService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.renderer.addClass(this.dm.nativeElement, 'h-full');

      if (darkMode) {
        this.darkMode();
      } else {
        this.lightMode();
      }
    });
  }

  private lightMode() {
    this.renderer.removeClass(this.dm.nativeElement, 'dark');
    this.renderer.removeClass(this.dm.nativeElement, 'bg-slate-900');
    this.renderer.addClass(this.dm.nativeElement, 'bg-slate-100');
  }

  private darkMode() {
    this.renderer.addClass(this.dm.nativeElement, 'dark');
    this.renderer.removeClass(this.dm.nativeElement, 'bg-slate-100');
    this.renderer.addClass(this.dm.nativeElement, 'bg-slate-900');
  }
}
