import { NgModule } from '@angular/core';
import { MembershipModule } from '@shared/membership/membership.module';
import { SharedModule } from '@shared/shared.module';
import { AuthenticationRoutingModule } from './authentication.routing';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';

@NgModule({
  imports: [SharedModule, AuthenticationRoutingModule, MembershipModule],
  exports: [],
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  providers: [],
})
export class AuthenticationModule {}
