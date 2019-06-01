import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SearchChampComponent } from './search-champ/search-champ.component';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        HomeComponent,
        SearchChampComponent,
        PagesComponent,
        LandingComponent,
    ],
    imports: [ 
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        SharedModule,
    ],
    exports: [
        HomeComponent,
        SearchChampComponent,
        PagesComponent
    ],
    providers: [],
})
export class PagesModule {}