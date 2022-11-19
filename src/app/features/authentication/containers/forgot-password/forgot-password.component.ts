import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  /**
   * Constructor
   */
  constructor(
      private fb: FormBuilder,
      private authService: AuthService
  )
  {
  }

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Create the form
      this.forgotPasswordForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]]
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Send the reset link
   */
  sendResetLink(): void
  {
    this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe((res) => {
      console.log(res);
    });
  }

}
