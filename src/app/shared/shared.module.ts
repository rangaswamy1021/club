import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  providers: [],
})
export class SharedModule { }
