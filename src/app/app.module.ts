import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { NavigationCancel } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { TaskListDonePipePipe } from './tasks/task-list/done/task-list-done-pipe.pipe';
import { TaskListByNamePipePipe } from './tasks/task-list/task-list-by-name-pipe.pipe';
import { TaskObservableService } from './tasks/task-list/task-observable.service';
import { TasksPromiseService } from './tasks/task-list/tasks-promise.service';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskComponent,
    NavigationComponent,
    PageNotFoundComponent,
    TaskListDonePipePipe,
    TaskListByNamePipePipe
  ],
  imports: [
    BrowserModule
    , FormsModule
    , AppRoutingModule
    , HttpModule
  ],
  providers: [
    TaskObservableService,
    TasksPromiseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
