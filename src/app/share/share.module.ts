import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    TopBarComponent,
    IconButtonComponent,
    TextButtonComponent,
    SwitchComponent,
  ],
  imports: [CommonModule],
  exports: [
    TopBarComponent,
    IconButtonComponent,
    TextButtonComponent,
    SwitchComponent,
  ],
})
export class ShareModule {}
