import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { HorizontalNavigationComponent } from './horizontal/horizontal.component';
import { HorizontalNavigationBasicItemComponent } from './horizontal/components/basic/basic.component';
import { HorizontalNavigationBranchItemComponent } from './horizontal/components/branch/branch.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule,RouterModule, SharedModule],
  exports: [NavigationComponent],
  declarations: [NavigationComponent,
    HorizontalNavigationComponent,
    HorizontalNavigationBasicItemComponent,
    HorizontalNavigationBranchItemComponent
    ],
  providers: [],
})
export class NavigationModule { }
