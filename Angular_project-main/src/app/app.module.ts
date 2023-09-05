import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedPages/navbar/navbar.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FaqComponent } from './sharedPages/faq/faq.component';
import { LoginModule } from 'src/app/login/login.module';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SignupModule } from './signup/signup.module';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { UndermaintenanceComponent } from './undermaintenance/undermaintenance.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { SuccessComponent } from './success/success.component';
import { StarComponent } from './star/star.component';
import { FilterPipe } from './filter.pipe';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    FaqComponent,
    WelcomepageComponent,
    LoginComponent,
    SignupComponent,
    SellerloginComponent,
    UndermaintenanceComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    ProductpageComponent,
    SuccessComponent,
    StarComponent,
    FilterPipe,
    CartpageComponent,
    CheckoutComponent,
    PaymentsComponent,
    ProductinfoComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
