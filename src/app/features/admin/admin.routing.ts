import { BookingHistoryComponent } from './containers/booking-history/booking-history.component';
import { InboxComponent } from './containers/inbox/inbox.component';
import { LocationsComponent } from './containers/locations/locations.component';
import { MembersComponent } from './containers/members/members.component';
import { ProfilesComponent } from './containers/profiles/profiles.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: AdminComponent  },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'members', component: MembersComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'booking-history', component: BookingHistoryComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
