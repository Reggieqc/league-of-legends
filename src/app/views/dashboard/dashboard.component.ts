import { Component, OnInit } from '@angular/core';
import { RiotService} from 'src/app/services/riot.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private riotService: RiotService) { 
    this.riotService.getUserInfo()
      .subscribe( res => {
        console.log(res)
      })
  }

  ngOnInit() {

  }

}
