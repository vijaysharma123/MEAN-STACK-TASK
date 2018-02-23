import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {
  
   searchRes:Array<object>;
   
   searchStr:string;
   order: string = 'searchRes.title';
  reverse: boolean = false;
   sortedCollection: any[];
   searchMovie()
      {
        this._movieservice.searchMovie(this.searchStr).subscribe(res=>{
          this.searchRes=res.results;
          
        }) 
      }
  constructor(private _movieservice:MovieService,private orderPipe: OrderPipe)
   {
     
      this.sortedCollection = orderPipe.transform(this.searchRes, 'searchRes.title');
    console.log(this.sortedCollection);
       

    }
      
       setOrder(value: string) {
         console.log(value);
    if (this.order === value)
     {

    
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  ngOnInit() {
  }

}
