import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '@features/member/services/member.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  memberShipForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly memberService: MemberService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
            // Create the form
            this.memberShipForm = this.fb.group({
              fullname      : ['', Validators.required],
              username      : ['', Validators.required],
              email     : ['', [Validators.required, Validators.email]],
              mobile  : ['', Validators.required],
              password  : ['', Validators.required],
              currentcity   : [''],
              agegroup   : [''],
          }
      );
  }

  signUp(){
    if(this.memberShipForm.invalid){
      return;
    }
    this.memberService.signUp(this.memberShipForm.value).subscribe((res)=>{
        this.router.navigate([`/dashboard`])
        console.log(res);
    })
  }

}
