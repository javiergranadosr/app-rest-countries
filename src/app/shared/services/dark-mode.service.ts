import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private $darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  public set darkMode(darkMode: boolean) {
    this.$darkMode.next(darkMode);
  }

  public get darkMode$(): Observable<boolean> {
    return this.$darkMode.asObservable();
  }
}
