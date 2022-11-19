import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private readonly snackBar: MatSnackBar) {}

  /**
   * @param  {string|string[]} message
   * @param  {} statusClass='regal-snack-success'
   * @param  {} duration=5000
   * @returns void
   */

  openSnackBar(
    message: string | string[],
    statusClass = 'regal-snack-success',
    duration = 5000
  ): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration,
      data: message,
      panelClass: [statusClass],
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
