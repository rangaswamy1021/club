import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationService } from '../services/navigation.service';
import { Navigation } from './navigation.types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isScreenSmall: boolean;
  navigation: Navigation | any;
  private unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(        private _navigationService: NavigationService,
    ) { }

     /**
     * On init
     */
      ngOnInit(): void
      {
          // Subscribe to navigation data
          this._navigationService.navigation$
              .pipe(takeUntil(this.unsubscribeAll))
              .subscribe((navigation: Navigation | any) => {
                  this.navigation = {horizontal: navigation};
                  console.log(this.navigation, 'this.navigation');
              });
      }

        /**
     * On destroy
     */
         ngOnDestroy(): void
         {
             // Unsubscribe from all subscriptions
             this.unsubscribeAll.next(null);
             this.unsubscribeAll.complete();
         }

}
