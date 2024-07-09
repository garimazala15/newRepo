import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contactForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.contactForm=this.fb.group({
      firstname:['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8)
        ]
        ],
        lastname:['',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(6)
          ]
          ],
       
        email:['',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z]+\.(com)$/)
          ]
        ],
        companyname:['',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20)
          ]
          ],
          message:['',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(200),
              Validators.pattern(/^[a-zA-Z0-9\s]+$/)
            ]
            ],
        phone:['',
          [
            Validators.required,
            Validators.pattern(/^[789]\d{9}$/)
          ]
        ],
    });
  }  
  submitForm(){
    if(this.contactForm.valid){
      console.log('Form Submitted',this.contactForm.value);
    }
    else{
      this.contactForm.markAllAsTouched;
      console.log('form is invalid');
    }
  }
}
