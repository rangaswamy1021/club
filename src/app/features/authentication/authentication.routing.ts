import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './containers/sign-in/sign-in.component';

export const routes: Routes = [
 { path: 'sign-in', component: SignInComponent },
 { path: 'sign-up', component: SignUpComponent },
 { path: 'forgot-password', component: ForgotPasswordComponent },
 { path: 'reset-password', component: ResetPasswordComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }
