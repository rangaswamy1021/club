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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  /**
   * Sign in
   * @returns void
   */
  signIn(): void {
    this.authService.signIn(this.signInForm.value).subscribe((res) => {
      this.router.navigate([`/dashboard`])
      console.log(res);
    });
  }
}
