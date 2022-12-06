import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, tap } from 'rxjs';
import { UserDetail } from '../models/user-detail';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(private http: HttpClient) {}

  /**
   * Get a user details
   * ******************************
   */

  getUserDetails(): Observable<UserDetail> {
    return this.http
      .get<UserDetail>(`${environment.baseApiUrl}/user-detail`)
      .pipe(tap((_res) => {}));
  }

  /**
   * Register a user details
   * @param {UserDetail} userDetails
   * ******************************
   */

  createUserDetails(userDetail: UserDetail): Observable<UserDetail> {
    return this.http
      .post<UserDetail>(`${environment.baseApiUrl}/user-detail`, userDetail)
      .pipe(tap((_res) => {}));
  }

  /**
   * Update a user details
   * @param {UserDetail} userDetails
   * ******************************
   */

  updateUserDetails(userDetail: UserDetail): Observable<UserDetail> {
    return this.http
      .put<UserDetail>(`${environment.baseApiUrl}/user-detail`, userDetail)
      .pipe(tap((_res) => {}));
  }
}
