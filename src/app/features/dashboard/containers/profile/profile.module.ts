import { ProfileListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProfileAddEditComponent } from './add-edit/add-edit.component';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';


@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  exports: [],
  declarations: [
    ProfileAddEditComponent,
    ProfileListComponent,
    ProfileComponent
  ],
  providers: [],
})
export class ProfileModule { }
