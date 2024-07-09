import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  Cube(num:number){
    return num*num*num;
  }

  EvenOdd(num:number){
    if(num%2==0)
      return"even number";
    else
    return "odd number";
  }

  SayHello(str:string){
    return "hello"+str;
  }

  GetUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  

}
