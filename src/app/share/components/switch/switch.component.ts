import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckedToggle(): void {
    this.checkedChange.emit(!this.checked);
  }
}
