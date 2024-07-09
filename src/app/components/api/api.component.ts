import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{
  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private service :ApiserviceService){

  }

  ngOnInit(): void {
    this.service.getApi().subscribe(data=>{
      console.log(data);
      this.getJsonValue=data;
    })
    this.service.postApi().subscribe(data=>{
      console.log(data);
      this.postJsonValue=data;
    })
  
  }

}
