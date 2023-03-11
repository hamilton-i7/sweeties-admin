import { Component } from '@angular/core';
import { ButtonVariant } from '../../../../share/components/button/button.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;
}
