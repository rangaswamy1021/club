import { AuthService } from '@core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  /**
   * Constructor
   */
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.resetPasswordForm = this.fb.group({
      email: ['', Validators.required],
      code: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Reset password
   */
  resetPassword(): void {
    this.authService
      .resetPassword(this.resetPasswordForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
