import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

@NgModule({
  declarations: [TopBarComponent, IconButtonComponent],
  imports: [CommonModule],
  exports: [TopBarComponent, IconButtonComponent],
})
export class ShareModule {}
