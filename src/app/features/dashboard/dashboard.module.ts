import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DashBoardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { SubscriptionComponent } from './containers/subscription/subscription.component';
import { AccountComponent } from './containers/account/account.component';
import { BookingComponent } from './containers/booking/booking.component';
import { ReferEarnComponent } from './containers/refer-earn/refer-earn.component';

@NgModule({
  imports: [SharedModule, DashBoardRoutingModule],
  exports: [],
  declarations: [
    DashboardComponent,
    SubscriptionComponent,
    AccountComponent,
    BookingComponent,
    ReferEarnComponent,
  ],
  providers: [],
})
export class DashBoardModule {}
