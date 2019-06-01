import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';

//Modulos 
import { PagesModule } from './pages/pages.module';

//Librerias
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RiotService } from './services/riot.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule,
    HttpClientModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [
    RiotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
