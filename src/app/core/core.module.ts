import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadBannerComponent } from './components/head-banner/head-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [BrowserAnimationsModule, HttpClientModule, MatIconModule, RouterModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeadBannerComponent,
    SnackBarComponent
  ],
  exports: [HeaderComponent, FooterComponent, HeadBannerComponent],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
