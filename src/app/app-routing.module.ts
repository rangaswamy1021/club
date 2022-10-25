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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
