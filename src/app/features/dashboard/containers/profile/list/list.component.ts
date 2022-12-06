import { Component, OnInit } from '@angular/core';
import { UserDetail } from '@features/dashboard/models/user-detail';
import { UserDetailService } from '@features/dashboard/services/user-detail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ProfileListComponent implements OnInit {
  userDetail$: Observable<UserDetail>;
  constructor(private userDetailService: UserDetailService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  /**
   * Get User Deatils
   * @returns void
   */
  getUserDetails(): void {
    this.userDetail$ = this.userDetailService.getUserDetails();
  }
}
