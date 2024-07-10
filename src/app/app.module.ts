import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import { MoviesComponent } from './components/movies/movies.component';
import { ApiComponent } from './components/api/api.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialsComponent } from './components/materials/materials.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIcon} from '@angular/material/icon'
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { Form } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './Component/registration/registration.component';
import { VerifyOtpComponent } from './Component/verify-otp/verify-otp.component';
import { VerificationSuccessComponent } from './Component/verification-success/verification-success.component';
import { LoginComponent } from './Component/login/login.component';
import { EmailService } from './Service/email.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    MoviesComponent,
    ApiComponent,
    MaterialsComponent,
    RegistrationComponent,
    VerifyOtpComponent,
    VerificationSuccessComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIcon,
    ReactiveFormsModule
  ],
  providers: [
    EmailService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
