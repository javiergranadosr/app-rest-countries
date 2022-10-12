import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public textButton: string = '';
  @Input() public hasIcon: boolean = false;
  @Input() public back: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public buttonBack() {
    if (this.back) {
      this.router.navigateByUrl('/countries');
    }
  }
}
