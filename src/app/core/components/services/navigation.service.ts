import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { horizontalNavLinks } from '../data';
import { Navigation } from '../navigation/navigation.types';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  /**
   * Getter for navigation
   */
  get navigation$(): Observable<any> {
    return of(horizontalNavLinks);
  }
}
