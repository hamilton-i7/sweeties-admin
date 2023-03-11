import { Component } from '@angular/core';
import { ButtonVariant } from '../../../../share/components/button/button.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;
}
