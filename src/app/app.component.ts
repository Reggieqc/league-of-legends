import { Component, OnInit } from '@angular/core';
import { RiotService } from './services/riot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private riot: RiotService) {}

  selected: string;
  champs: any;
  champ:any;

  ngOnInit() {
    this.riot.getChamps()
      .subscribe((data:any)=>{  
        data = Object.values(data['data'])
        this.champs = data;    
        // console.log(this.champs)    
      })
  }

  selectChampion(id:string){
    id = this.selected;
    id ?
    this.riot.getChamp(id)
      .subscribe((data:any)=>{
        this.champ = data['data'];
        console.log(data)
        console.log(this.champ.data[id].key)
      }) : this.champ = null;
  }
}
