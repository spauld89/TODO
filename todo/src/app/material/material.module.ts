import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdGridListModule, MdListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdListModule,
    NoopAnimationsModule
  ],
  exports: [
    MdGridListModule,
    MdListModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
