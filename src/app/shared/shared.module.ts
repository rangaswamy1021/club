import { CoreModule } from '@core/core.module';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [CoreModule, MaterialModule],
  exports: [CoreModule, MaterialModule],
  declarations: [],
  providers: [],
})
export class SharedModule { }
