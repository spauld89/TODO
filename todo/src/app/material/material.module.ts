import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdDatepickerModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdNativeDateModule,
    MdSelectModule,
    NoopAnimationsModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdNativeDateModule,
    MdSelectModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
