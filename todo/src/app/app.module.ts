import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { SearchComponent } from './main/search/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormComponent,
    TaskComponent,
    InfoComponent,
    MainComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
