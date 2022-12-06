import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  /**
   * Constructor
   */
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.signInForm = this.fb.group({
      email: ['vipin.vipin.g498@gmail.com', [Validators.required, Validators.email]],
      password: ['Test@1234', Validators.required],
    });
  }


  /**
   * Sign in
   * @returns void
   */
  signIn(): void {
    this.authService.signIn(this.signInForm.value).subscribe((res) => {
      this.router.navigate([`/dashboard/profile/add`])
      console.log(res);
    });
  }
}
