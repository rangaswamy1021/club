import { ReferEarnComponent } from './containers/refer-earn/refer-earn.component';
import { BookingComponent } from './containers/booking/booking.component';
import { SubscriptionComponent } from './containers/subscription/subscription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './containers/account/account.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'account', component: AccountComponent },
  { path: 'refer-earn', component: ReferEarnComponent },
  {
    path: 'profile',
    loadChildren: () => import('@features/dashboard/containers/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
