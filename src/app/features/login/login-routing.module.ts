import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Iniciar Sesion',
    ...canActivate(() => redirectLoggedInTo(['/home'])),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
