import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
// import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    {
        path:'',
        component: PagesComponent,
    }
    // { path: 'path3', component: Name3Component },
    // { path: '', component: HomeComponent },
    // { path: 'path2', component: Name2Component },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
