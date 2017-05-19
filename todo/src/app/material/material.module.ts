import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    NoopAnimationsModule
  ],
  exports: [
    MdGridListModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
