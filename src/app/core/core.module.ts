import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadBannerComponent } from './components/head-banner/head-banner.component';


@NgModule({
  imports: [],
  exports: [HeaderComponent, FooterComponent, HeadBannerComponent],
  declarations: [HeaderComponent, FooterComponent, HeadBannerComponent],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

