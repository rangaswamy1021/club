import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MembershipComponent } from './membership.component';


@NgModule({
  imports: [SharedModule],
  exports: [MembershipComponent],
  declarations: [MembershipComponent],
})
export class MembershipModule { }
