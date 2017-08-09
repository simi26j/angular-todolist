import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AppCustomPreloader } from './app-routing-loader';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: TaskListComponent },
    // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule',
        data: {
            preload: true
        }
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: AppCustomPreloader } )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AppCustomPreloader
    ]
})
export class AppRoutingModule { }
