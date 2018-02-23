import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey:string;
  constructor(private _jsonp:Jsonp) {
  	this.apiKey='3e481867520574de8b4749e57ac7fc21';
  console.log("movie service initialise"); 

  }
  
         

   searchMovie(searchStr: string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
        .map(res => res.json());
    }
  
}
