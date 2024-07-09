import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  constructor(private service:MovieserviceService){

  }
  public movies;
  ngOnInit(): void {
  
  }
  searchMovie(){
    this.service.getMovies().subscribe(data=>{
      this.movies=data;
      console.log(data);
    })
  }
  

}
