import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { Login1Component } from './login1/login1.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { FinderLoginComponent } from './finder-login/finder-login.component';
import { AboutComponent } from './about/about.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FindthedonorComponent } from './finder/findthedonor.component';
import { SpotingdonorComponent } from './spot/spotingdonor.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FnProfileComponent } from './fn-profile/fn-profile.component';
import { DnDonationComponent } from './dn-donation/dn-donation.component';
import { FnDonationComponent } from './fn-donation/fn-donation.component';
import { FnHelpComponent } from './fn-help/fn-help.component';
import { DnHelpComponent } from './dn-help/dn-help.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment2Component } from './payment2/payment2.component';

const routes: Routes = [
  {path:'',component:Home1Component},
  {path:'home1',component:Home1Component},
  {path:'about',component:AboutComponent},
  {path:'login',component:Login1Component},
  {path:'donor',component:DonorLoginComponent},
  {path:'finder',component:FinderLoginComponent},
  {path:'home2',component:Home2Component},
  {path:'home3',component:Home3Component},
  {path:'profile',component:MyProfileComponent},
  {path:'faq',component:FaqsComponent},
  {path:'find1',component:FindthedonorComponent},
  {path:'spot',component:SpotingdonorComponent},
  {path:'signup',component:SignupComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'profile2',component:FnProfileComponent},
  {path:'dn-donation',component:DnDonationComponent},
  {path:'fn-donation',component:FnDonationComponent},
  {path:'fn-help',component:FnHelpComponent},
  {path:'dn-help',component:DnHelpComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment2',component:Payment2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
