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
    const params = new HttpParams().set('api_key','RGAPI-00483332-17ae-4b61-87be-d675b02d27bb')
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

  getChampImages(champName: string){
    return this.http.get(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`)
  }
}
