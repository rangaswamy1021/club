import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '@features/dashboard/services/booking.service';
import { Booking } from '@features/dashboard/models/booking';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
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
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class BookingComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  isUpdateBooking = false;
  bookingForm: FormGroup;
  id;
  constructor(
    private bookingService: BookingService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.bookings$ = this.bookingService.getBookings();
  }

  buildForm(): void {
    // Create the form
    this.bookingForm = this.fb.group({
      property: [''],
      checkInDate: [''],
      checkOutDate: [''],
      noOfAdults: [null],
      noOfChildren: [null],
    });
  }

  createBooking(): void {
    if (this.bookingForm.invalid) {
      return;
    }
    this.bookingService
      .createBooking(this.bookingForm.value)
      .pipe(
        switchMap(() => (this.bookings$ = this.bookingService.getBookings()))
      )
      .subscribe((res) => {
        // this.router.navigate([`/dashboard/profile`])
      });
  }

  editBooking(booking: Booking): void {
    this.id = booking._id;
    this.isUpdateBooking = true;
    const formgp = this.bookingForm;
    formgp.reset();
    formgp.controls['property'].patchValue(booking.property);
    formgp.controls['checkInDate'].patchValue(booking.checkInDate);
    formgp.controls['checkOutDate'].patchValue(booking.checkOutDate);
    formgp.controls['noOfAdults'].patchValue(booking.noOfAdults);
    formgp.controls['noOfChildren'].patchValue(booking.noOfChildren);
  }

  clear() {
    this.isUpdateBooking = false;
    this.bookingForm.reset();
  }

  updateBooking() {
    let bookingPayload: Booking = this.bookingForm.value;

    if(this.id) {
      bookingPayload = {...bookingPayload, _id: this.id}
    }

    if (this.bookingForm.invalid) {
      return;
    }
    this.bookingService
      .updateBooking(bookingPayload)
      .pipe(
        switchMap(() => (this.bookings$ = this.bookingService.getBookings()))
      )
      .subscribe((res) => {
        // this.router.navigate([`/dashboard/profile`])
      });
  }
}
