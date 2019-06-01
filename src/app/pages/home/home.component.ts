import { Component, OnInit } from '@angular/core';
import { RiotService} from 'src/app/services/riot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addCss = false;
  constructor( private riotService: RiotService) { 
    this.riotService.getUserInfo()
      .subscribe( res => {
        console.log(res)
      })
  }

  ngOnInit() {}

  refreshCss(event:boolean) {
    this.addCss = !this.addCss;
   }
}
