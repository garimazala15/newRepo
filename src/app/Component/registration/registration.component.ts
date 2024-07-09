import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/passwordValidator';
import { Router } from '@angular/router';
import { OtpService } from '../../Service/otp.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registerForm:FormGroup;
  otpForm:FormGroup;
  isOtpSent=false;
  isOtpModalVisible = false; 
  constructor(private fb:FormBuilder,private router:Router,private otpService:OtpService){
    this.otpForm=this.fb.group({
      otp:['',
        [Validators.required,Validators.minLength(6),Validators.maxLength(6)]
      ]
    });
    this.registerForm=this.fb.group({
      fullname:['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
        ],
        username:['',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~`|\//-]{8,20}$/)
          ]
        ],
        email:['',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z]+\.(com)$/)
          ]
        ],
        password:['',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;,.""<>?~`|//\-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>.,?~`|\\/-]{8,20}$/)
          ]
        ],
        phone:['',
          [
            Validators.required,
            Validators.pattern(/^[789]\d{9}$/)
          ]
        ],
        confirmPassword: [''],
  },{validator: PasswordValidator} as AbstractControlOptions
);
  }
  submitForm(){
    if(this.registerForm.valid){
      console.log('Form Submitted',this.registerForm.value);
      alert("Registration Successfull!");
    }
    else{
      this.registerForm.markAllAsTouched;
      console.log('form is invalid');
    }
  }
  sendOtpEmail() {
    if(this.registerForm.get('email')?.valid){
    const otp=this.generateOtp();
    localStorage.setItem('otp',otp);
    localStorage.setItem('email',this.registerForm.get('email')?.value);
    console.log(`OTP for ${this.registerForm.get('email')?.value}:${otp}`);
    alert(`otp sent to ${this.registerForm.get('email')?.value}:${otp}`)
    this.isOtpSent=true;
    }
    else{
      alert("please enter a valid email address")
    }
    this.isOtpModalVisible=true;
  }
  resendOtp():void{
    console.log("resending otp :")
    const newOtp=this.generateOtp();
    localStorage.setItem('otp',newOtp);
    localStorage.setItem('email',this.registerForm.get('email')?.value);
    console.log(`OTP for ${this.registerForm.get('email')?.value}:${newOtp}`);
    alert(`otp sent to ${this.registerForm.get('email')?.value}:${newOtp}`)
    this.isOtpSent=true;

  }
  resetOtp(){
    console.log("reseting otp :");
    localStorage.removeItem('otp');
    this.otpForm.reset();

  }
  
  async verifyOtp() {
    if (this.otpForm.valid) {
      const enteredOtp = this.otpForm.value.otp;
      try {
        const isValid = await this.otpService.verifyOtp(enteredOtp);
        if (isValid) {
          console.log("OTP verified");
          alert("OTP Verified Successfully");
          this.isOtpModalVisible=false;
        } else {
          console.error("Invalid OTP");
          alert("Invalid OTP, please try again.");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("An error occurred during OTP verification. Please try again.");
      }
    }
  }
  generateOtp():string{
    return Math.floor(100000+Math.random()*900000).toString();
  }
}

