import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(){

  }
  public ID:string="Text1";
  public isDisabled:boolean=false;
  public userName:string="Shital";
  public itemImageUrl='assets/logo.jpg';
  getColor(){
    return 'yellow';
  }
  isError=true;
public myStyle={
  color:"green",
  fontStyle:"italic",
  textDecoration:"underline"
}
applyClass=false;
public applyClasses  ={
  "font-italic":true,
 "text-red":true ,
 "text-bold":true

}

  ngOnInit(): void {
      
  }

}
