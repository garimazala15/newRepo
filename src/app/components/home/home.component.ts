import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private service:ContactService){
    
  }
  items=["abc1","abc2","abc3","abc4"];
  data="Hello";
  public todayDate=new Date();
  public username='garima';
  public c=2000;
public hasError=false;
  ngOnInit(): void {
    console.log(this.service.EvenOdd(4));
    console.log(this.service.SayHello('garima'));
  }

}
