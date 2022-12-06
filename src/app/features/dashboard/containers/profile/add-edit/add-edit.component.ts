import { UserDetail } from '@features/dashboard/models/user-detail';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '@features/dashboard/services/user-detail.service';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: ['l', 'LL'],
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-profile-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ProfileAddEditComponent implements OnInit {
  profileForm: FormGroup;
  childrenForm: FormGroup;
  userData: UserDetail;
  id: string;
  isAddMode: boolean;
  languagesList = ['telugu', 'hindi', 'english'];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.buildForm();
    if (!this.isAddMode) {
      this.userDetailService
        .getUserDetails()
        .pipe(first())
        .subscribe((res) => {
          this.userData = res;
          this.updateForm(res);
        });
    }
  }

  buildForm(): void {
    // Create the form
    this.profileForm = this.fb.group({
      languages: this.fb.array([]),
      firstName: [''],
      lastName: [''],
      dob: [],
      anniversary: [''],
      spouseName: [''],
      spouseAge: [''],
      children: this.fb.array([]),
    });
  }

  updateForm(selectedData: UserDetail) {
    const formgp = this.profileForm;
    formgp.reset();
    formgp.controls['firstName'].patchValue(selectedData.firstName);
    formgp.controls['lastName'].patchValue(selectedData.lastName);
    formgp.controls['dob'].patchValue(selectedData.dob);
    formgp.controls['anniversary'].patchValue(selectedData.anniversary);
    formgp.controls['spouseName'].patchValue(selectedData.spouseName);
    formgp.controls['spouseAge'].patchValue(selectedData.spouseAge);
    formgp.controls['children'].patchValue(selectedData.children);
    formgp.controls['languages'].patchValue(selectedData.languages);
    this.bindChildren(selectedData.children);
    this.profileForm.patchValue(selectedData);
  }

  onCheckboxChange(language: string, e: any) {
    // const languages: FormArray = this.profileForm.get('languages') as FormArray;
    if (e.checked) {
      this.languages.push(new FormControl(language));
    } else {
      let i: number = 0;
      this.languages.controls.forEach((item: any) => {
        if (item.value == language) {
          this.languages.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get children() {
    return this.profileForm.controls['children'] as FormArray;
  }
  get languages() {
    return this.profileForm.controls['languages'] as FormArray;
  }

  bindChildren(children) {
    children.forEach((x) => {
      let child: FormGroup = this.newChildren();
      this.children.push(child);
    });
  }

  addChildren() {
    this.children.push(this.newChildren());
  }

  newChildren(): FormGroup {
    return this.fb.group({
      name: [''],
      age: [''],
    });
  }

  deleteChildren(childrenIndex: number) {
    this.children.removeAt(childrenIndex);
  }

  /**
   * Create User Deatils
   * @returns void
   */
  save(): void {
    if (this.isAddMode) {
      this.createUserDetails();
    } else {
      this.updateUserDetails();
    }
  }
  createUserDetails(): void {
    if (this.profileForm.invalid) {
      return;
    }
    this.userDetailService
      .createUserDetails(this.profileForm.value)
      .subscribe((res) => {
        this.router.navigate([`/dashboard/profile`])
      });
  }

  updateUserDetails(): void {
    if (this.profileForm.invalid) {
      return;
    }
    this.userDetailService
      .updateUserDetails(this.profileForm.value)
      .subscribe((res) => {
        this.router.navigate([`/dashboard/profile`])
      });
  }
}
