import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../Service/email.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  otpForm: FormGroup;
  isOtpSent = false;
  isOtpModalVisible = false;
  generatedOtp: string;

  constructor(private fb: FormBuilder, private router: Router, private emailService: EmailService) {
    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~`|\//-]{8,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;,.""<>?~`|//\-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>.,?~`|\\/-]{8,20}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      confirmPassword: ['']
    });
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  ngOnInit() {
    this.loadScript('https://cdn.emailjs.com/dist/email.min.js').then(() => {
      console.log('EmailJS loaded successfully.');
    }).catch(error => {
      console.error('Error loading EmailJS:', error);
    });
  }

  loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      document.head.appendChild(script);
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      alert("Registration Successful!");
    } else {
      this.registerForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  sendOtpEmail() {
    const emailControl = this.registerForm.get('email');
    if (emailControl && emailControl.valid) {
      this.generatedOtp = this.generateOtp();
      const email = emailControl.value;
      console.log(`Generated OTP: ${this.generatedOtp}`);
      this.sendEmail(email, this.generatedOtp);
      this.isOtpModalVisible = true;
    } else {
      alert("Please enter a valid email address");
    }
  }

  resendOtp(): void {
    this.generatedOtp = this.generateOtp();
    const email = this.registerForm.get('email')?.value;
    console.log(`Generated OTP: ${this.generatedOtp}`);
    this.sendEmail(email, this.generatedOtp);
  }

  resetOtp() {
    this.otpForm.reset();
  }

  verifyOtp() {
    if (this.otpForm.valid) {
      const enteredOtp = this.otpForm.value.otp;
      if (enteredOtp === this.generatedOtp) {
        console.log("OTP verified");
        alert("OTP Verified Successfully");
        this.isOtpModalVisible = false;
        this.isOtpSent = true;
      } else {
        console.error("Invalid OTP");
        alert("Invalid OTP, please try again.");
      }
    }
  }

  generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  sendEmail(email: string, otp: string) {
    this.emailService.sendOTPEmail(email, otp).then((response) => {
      console.log('Email sent successfully:', response);
      if (response.status === 200) {
        alert(`OTP sent to your email: ${email}`);
        this.isOtpSent = true;
      } else {
        console.error('Failed to send email:', response);
        alert("Failed to send OTP. Please try again.");
      }
    }).catch(error => {
      console.error('Error sending email:', error);
      alert("Failed to send OTP. Please try again.");
    });
  }
}
