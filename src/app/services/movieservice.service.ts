import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) {

   }
   getMovies(){
    const apikey='749b284';
    return this.http.get('http://www.omdbapi.com/?apikey=8266bbff&t=baahubali')
   }
}
