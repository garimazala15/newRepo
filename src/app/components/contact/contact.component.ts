import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  constructor(private service:ContactService){

  }
  public users;
  ngOnInit(): void {
    //console.log(this.service.Cube(3));

    this.service.GetUser().subscribe(data=>{console.log(data);
      this.users=data;
    })
  }
  

}
