import { ProfileAddEditComponent } from './add-edit/add-edit.component';
import { ProfileListComponent } from './list/list.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileListComponent },
      { path: 'add', component: ProfileAddEditComponent },
      { path: 'edit/:id', component: ProfileAddEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
