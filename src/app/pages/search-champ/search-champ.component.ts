import { Component, OnInit } from '@angular/core';
import { RiotService } from 'src/app/services/riot.service';

@Component({
  selector: 'app-search-champ',
  templateUrl: './search-champ.component.html',
  styleUrls: ['./search-champ.component.scss']
})
export class SearchChampComponent implements OnInit {  

  constructor(private riot: RiotService) { }

  selected: string;
  champs: any;
  champ: any;

  ngOnInit() {
    this.riot.getChamps()
      .subscribe((data:any)=>{  
        data = Object.values(data['data'])
        this.champs = data;    
        // console.log(this.champs)    
      })     
  }

  getChampPicked(pickedChamp){
    this.champ = pickedChamp;
  }

  // selectChampion(){
  //   this.selected ?
  //   this.riot.getChamp(this.selected)
  //     .subscribe((data:any)=>{
  //       this.champ = data['data'];
  //       // console.log(this.champ)
  //     }) : this.champ = null;
  // }
}
