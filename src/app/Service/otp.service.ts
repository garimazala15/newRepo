import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  verifyOtp(otp: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulate an API call with a timeout
      setTimeout(() => {
        const storedOtp = localStorage.getItem('otp');
        resolve(storedOtp === otp);
      }, 1000);
    });
  }
}
