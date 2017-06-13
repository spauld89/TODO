import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './content/main/task-list/task-list.component';
import { FormComponent } from './content/main/form/form.component';
import { TaskComponent } from './content/task/task.component';
import { MainComponent } from './content/main/main.component';

import { routes } from './routes';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './content/main/search/search.component';
import { SearchPipe } from './common/pipes/search/search.pipe';
import { DatePipe } from '@angular/common';
import { StorageService } from './common/services/storage.service';
import { FormService } from './common/services/form.service';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormComponent,
    TaskComponent,
    MainComponent,
    HeaderComponent,
    SearchComponent,
    SearchPipe,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DatePipe,
    StorageService,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
