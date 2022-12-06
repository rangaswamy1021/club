import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { ResetPassword, SignIn, SignUp } from '@features/member/models/member';
import { Observable, tap } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  /**
   * Register a new member
   * @param {SignUp} member
   * ******************************
   */

  signUp(user: SignUp): Observable<SignUp> {
    return this.http
      .post<SignUp>(`${environment.authApiUrl}/signup`, user)
      .pipe(tap((_res) => {}));
  }

  /**
   * @param  {SignIn} credentials
   * @returns Observable
   */

  signIn(credentials: SignIn): Observable<any> {
    return this.http
      .post<SignIn>(`${environment.authApiUrl}/signin`, credentials)
      .pipe(tap((res) => {
        const token = res.token;
        localStorage.setItem("token", token)
        this.cookieService.set("token", token)
        console.log(res)
      }));
  }

  /**
   * Forgot password
   *
   * @param email
   */
  forgotPassword(email: string): Observable<any> {
    return this.http
      .post(`${environment.authApiUrl}/forgot-password`, email)
      .pipe(tap((_res) => {}));
  }

  /**
   * Reset password
   * @param  {ResetPassword} resetPassword
   * @returns Observable
   */
  resetPassword(resetPassword: ResetPassword): Observable<any> {
    return this.http
      .post(`${environment.authApiUrl}/reset-password`, resetPassword)
      .pipe(tap((_res) => {}));
  }
}
