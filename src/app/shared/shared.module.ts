import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ChampionComponent } from './champion/champion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [
        ButtonComponent,
        ChampionComponent,
        NavbarComponent,
        SliderComponent
    ],
    imports: [ CommonModule,
        SlickCarouselModule, ],
    exports: [
        ButtonComponent,
        ChampionComponent,
        NavbarComponent,
        SliderComponent
    ],
    providers: [],
})
export class SharedModule {}