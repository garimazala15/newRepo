import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { VerifyOtpComponent } from './Component/verify-otp/verify-otp.component';
import { VerificationSuccessComponent } from './Component/verification-success/verification-success.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'movies',component:MoviesComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'verify-otp',component:VerifyOtpComponent},
  {path:'verification-success',component:VerificationSuccessComponent},
  {path:'**',redirectTo:'register'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
