import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SearchChampComponent } from './search-champ/search-champ.component';
import { LandingComponent } from './landing/landing.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'search-champ', component: SearchChampComponent },
            { path: 'landing', component: LandingComponent },
            { path: '', redirectTo: '/home', pathMatch:'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes); 
