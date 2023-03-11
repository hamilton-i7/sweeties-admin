import { Component } from '@angular/core';
import { ButtonVariant } from '../../share/components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;
}
