import { MemberComponent } from './member.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MemberComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MemberRoutingModule { }
