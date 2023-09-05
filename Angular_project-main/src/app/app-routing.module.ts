import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UndermaintenanceComponent } from './undermaintenance/undermaintenance.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { StarComponent } from './star/star.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';



const routes: Routes = [
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'login', component:LoginComponent  },
  {path: 'sellerlogin', component:SellerloginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'home',component:HomeComponent},
  {path:'undermaintenance', component: UndermaintenanceComponent},
  {path:'products', component: ProductpageComponent},
  {path:'product/:id',component: ProductinfoComponent},
  { path:'cartpage',component: CartpageComponent},
  { path:'checkout',component: CheckoutComponent},
  {path:'success', component:SuccessComponent},
  {path:'payments', component:PaymentsComponent},
  
 
 {path:'**', component: WelcomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
