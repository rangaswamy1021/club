import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  memberShipForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
            // Create the form
            this.memberShipForm = this.fb.group({
              email     : ['', [Validators.required, Validators.email]],
              mobileNumber  : ['', Validators.required],
              password  : ['', Validators.required],
              currentCity   : [''],
              ageGroup   : [''],
          }
      );
  }

  signUp(){
    if(this.memberShipForm.invalid){
      return;
    }
    this.authService.signUp(this.memberShipForm.value).subscribe((res)=>{
        this.router.navigate([`/dashboard`])
        console.log(res);
    })
  }

}
