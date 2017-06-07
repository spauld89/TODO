import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './main//task-list/task-list.component';
import { FormComponent } from './main/form/form.component';
import { TaskComponent } from './main/task-list/task/task.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';

import { routes } from './routes';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './main/search/search.component';
import { SearchPipe } from './common/pipes/search/search.pipe';
import { DatePipe } from '@angular/common';
import { StorageService } from './common/services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormComponent,
    TaskComponent,
    InfoComponent,
    MainComponent,
    HeaderComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatePipe, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
