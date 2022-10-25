import { Member } from './../models/member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  apiUrl = environment.apiUrl
  constructor( private http: HttpClient) { }

  private readonly users: BehaviorSubject<Member[]  | null> = new BehaviorSubject(null);


  /**
   * Getter for users
   * @returns Observable
   */
  get users$(): Observable<Member[] | null> {
    return this.users.asObservable();
  }

  /**
   * Register a new member
   * @param {Member} member
   * ******************************
   */

   signUp(member: Member): Observable<Member> {
    return this.http.post<Member>(`${environment.apiUrl}/auth/local/register`, member).pipe(
      tap((_res)=>{

      })
    );
   }





}
