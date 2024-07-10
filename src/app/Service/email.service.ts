import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init('FnhimbZYMErh0oDrv'); // Replace with your EmailJS User ID
  }

  sendOTPEmail(email: string, otp: string): Promise<EmailJSResponseStatus> {
    const templateParams = {
      from_name: 'Garima Zala',
      'from.email': 'garima1582000@gmail.com',
      message: `Your OTP for email verification is ${otp}`,
      to_email: email, // Use the 'to_email' key as specified in your template
      reply_to: 'garima1582000@gmail.com'
    };

    return emailjs.send('service_ihpa2vv', 'template_3xttubg', templateParams);
  }
}
