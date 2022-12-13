import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, tap } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  /**
   * Get bookings
   * ******************************
   */

  getBookings(): Observable<Booking[]> {
    return this.http
      .get<Booking[]>(`${environment.baseApiUrl}/bookings`)
      .pipe(tap((_res) => {}));
  }

  /**
   * Register booking
   * @param {Booking} booking
   * ******************************
   */

  createBooking(booking: Booking): Observable<Booking> {
    return this.http
      .post<Booking>(`${environment.baseApiUrl}/booking`, booking)
      .pipe(tap((_res) => {}));
  }

  /**
   * Update booking
   * @param {Booking} booking
   * ******************************
   */

  updateBooking(booking: Booking): Observable<Booking> {
    return this.http
      .put<Booking>(`${environment.baseApiUrl}/booking`, booking)
      .pipe(tap((_res) => {}));
  }
}
