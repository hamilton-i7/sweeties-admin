import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-top-bar',
  templateUrl: './profile-top-bar.component.html',
  styleUrls: ['./profile-top-bar.component.scss'],
})
export class ProfileTopBarComponent {
  @Output() backClick = new EventEmitter<void>();

  onBack(): void {
    this.backClick.emit();
  }
}
