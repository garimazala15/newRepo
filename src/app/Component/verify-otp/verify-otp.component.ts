import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { OtpService } from '../../Service/otp.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent implements OnInit{
  otpForm:FormGroup;
  verificationStatus:string='';

  constructor(private fb:FormBuilder,private router:Router,private otpService:OtpService){
    this.otpForm=this.fb.group({
      otp:['',[Validators.required],Validators.minLength(6),Validators.maxLength(6)]
    });
  }
  ngOnInit(): void {
  }
  verifyOtp(){
    if(this.otpForm.valid){
      const enteredOtp=this.otpForm.value.otp;
      if(this.otpService.verifyOtp(enteredOtp)){
        console.log("otp verified");
        alert("OTP Verifed Successfully")
        this.router.navigate(['/'])
      }
      else{
        console.error("invalid otp");
        alert("invalid otp plz try again.");
      }
    }
  }

}
