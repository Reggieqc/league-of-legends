import { Component, OnInit } from '@angular/core';
import { RiotService } from 'src/app/services/riot.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides: object[]= [];

  slideConfig = {"slidesToShow": 5, "slidesToScroll": 5, 'dots': !0};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  
  trackByFn(index) {
    return index; // or item.id
  }

  pickChamp(i){
     return  console.log(this.slides[i]['id'])
  }

  constructor(private riot: RiotService) { }

  ngOnInit() {
    this.riot.getChamps()
      .subscribe((data: any) => {
        data = Object.values(data['data'])
        this.slides = data;
        console.log(this.slides)    
      })  
  }

}
