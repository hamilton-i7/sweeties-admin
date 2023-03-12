import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ButtonComponent } from './components/button/button.component';
import { SwitchComponent } from './components/switch/switch.component';
import { RouterModule } from '@angular/router';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';

@NgModule({
  declarations: [
    TopBarComponent,
    IconButtonComponent,
    ButtonComponent,
    SwitchComponent,
    TextFieldComponent,
    DialogComponent,
    ClickStopPropagationDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TopBarComponent,
    IconButtonComponent,
    ButtonComponent,
    SwitchComponent,
    TextFieldComponent,
    DialogComponent,
    ClickStopPropagationDirective,
  ],
})
export class ShareModule {}
