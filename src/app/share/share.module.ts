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
import { FileFieldComponent } from './components/file-field/file-field.component';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

@NgModule({
  declarations: [
    TopBarComponent,
    IconButtonComponent,
    ButtonComponent,
    SwitchComponent,
    TextFieldComponent,
    DialogComponent,
    ClickStopPropagationDirective,
    FileFieldComponent,
  ],
  imports: [CommonModule, RouterModule, NgxCleaveDirectiveModule],
  exports: [
    TopBarComponent,
    IconButtonComponent,
    ButtonComponent,
    SwitchComponent,
    TextFieldComponent,
    DialogComponent,
    ClickStopPropagationDirective,
    FileFieldComponent,
  ],
})
export class ShareModule {}
