import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  constructor(private http: HttpClient) { }

  getQuery( query: string){
    const url = `https://cors-anywhere.herokuapp.com/https://la2.api.riotgames.com/${ query }`;
    const params = new HttpParams().set('api_key','RGAPI-a549825d-6bd0-4b10-b7e9-6406562860aa')
    return this.http.get(url + params)
  }

  getUserInfo(){
    return this.getQuery('lol/summoner/v4/summoners/by-name/EasyTutorial?')
  }

  getSummoner(summonerName){
    return this.getQuery(`/lol/summoner/v4/summoners/by-name/${summonerName}`)
  }
  
  getChamp(champName: string){
    return this.http.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${champName}.json `)
  }

  getChamps():Observable<Object>{
    return this.http.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`)
  }
}
