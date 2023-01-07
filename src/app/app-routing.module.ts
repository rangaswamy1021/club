import { MemberModule } from '@features/member/member.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('@features/member/member.module').then(m => m.MemberModule)
  },

  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: () => import('@features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashBoardModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@features/admin/admin.module').then(m => m.AdminModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
