import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RiotService } from '../../services/riot.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {
  @Output() champPicked  = new EventEmitter<object>();
  champs: object[]= [];

  constructor(private riot: RiotService) { }

  ngOnInit() {
    this.riot.getChamps()
      .subscribe((data: any) => {
        data = Object.values(data['data'])
        this.champs = data;
        console.log(this.champs)    
      })  
  }

  pickChamp(i){
    this.champPicked.emit(this.champs[i])
  }
}
