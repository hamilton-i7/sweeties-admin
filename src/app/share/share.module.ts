import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { TextButtonComponent } from './components/text-button/text-button.component';

@NgModule({
  declarations: [TopBarComponent, IconButtonComponent, TextButtonComponent],
  imports: [CommonModule],
  exports: [TopBarComponent, IconButtonComponent, TextButtonComponent],
})
export class ShareModule {}
