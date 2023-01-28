import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { ProfilesComponent } from './containers/profiles/profiles.component';
import { MembersComponent } from './containers/members/members.component';
import { LocationsComponent } from './containers/locations/locations.component';
import { InboxComponent } from './containers/inbox/inbox.component';
import { BookingHistoryComponent } from './containers/booking-history/booking-history.component';
import { MemberDetailModelComponent } from './components/member-detail-model/member-detail-model.component';


@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  exports: [],
  declarations: [AdminComponent, ProfilesComponent, MembersComponent, LocationsComponent, InboxComponent, BookingHistoryComponent, MemberDetailModelComponent],
  providers: [],
})
export class AdminModule { }
