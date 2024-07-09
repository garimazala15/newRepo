import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*Http Api integration  POST,GET,DELETE,PUT*/
export class ApiserviceService {

  constructor(private http :HttpClient) {

   }
   
   getApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2');
   }
   postApi(){
    let body={
      userId:2,
      id:2,
      title: 'practice Angular',
      completed:false
    }
    return this.http.post('https://jsonplaceholder.typicode.com/todos',body);
   }
}
