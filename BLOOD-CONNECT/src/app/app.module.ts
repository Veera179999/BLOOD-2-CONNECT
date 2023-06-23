import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { Home2NavComponent } from './home2-nav/home2-nav.component';
import { Home3NavComponent } from './home3-nav/home3-nav.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FnProfileComponent } from './fn-profile/fn-profile.component';
import { FnDonationComponent } from './fn-donation/fn-donation.component';
import { DnDonationComponent } from './dn-donation/dn-donation.component';
import { DnHelpComponent } from './dn-help/dn-help.component';
import { FnHelpComponent } from './fn-help/fn-help.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment2Component } from './payment2/payment2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Home1Component,
    Login1Component,
    DonorLoginComponent,
    FinderLoginComponent,
    AboutComponent,
    Home2Component,
    Home3Component,
    MyProfileComponent,
    FaqsComponent,
    FindthedonorComponent,
    SpotingdonorComponent,
    SignupComponent,
    RegisterComponent,
    Nav1Component,
    Nav2Component,
    Home2NavComponent,
    Home3NavComponent,
    ContactUsComponent,
    FooterComponent,
    FnProfileComponent,
    FnDonationComponent,
    DnDonationComponent,
    DnHelpComponent,
    FnHelpComponent,
    PaymentComponent,
    Payment2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
