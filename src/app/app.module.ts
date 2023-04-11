import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { Home2Component } from './home2/home2.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { GetProductComponent } from './get-product/get-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminGetProfileComponent } from './admin-get-profile/admin-get-profile.component';
import { GetProductByIdComponent } from './get-product-by-id/get-product-by-id.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { About1Component } from './about1/about1.component';
import { Contact1Component } from './contact1/contact1.component';
import { MyPurchasesInfoComponent } from './my-purchases-info/my-purchases-info.component';
import { AdminGetProductByIdComponent } from './admin-get-product-by-id/admin-get-product-by-id.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaymentComponent } from './bayment/bayment.component';
import { Serch1Component } from './serch1/serch1.component';
import { Serch2Component } from './serch2/serch2.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    Home2Component,
    GetProfileComponent,
    ProductInfoComponent,
    GetProductComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    RegisterOptionComponent,
    LoginOptionComponent,
    AdminProfileComponent,
    AdminGetProfileComponent,
    GetProductByIdComponent,
    UpdateProfileComponent,
    UpdateProductComponent,
    HeaderComponent,
    FooterComponent,
    MyPurchasesComponent,
    UserPurchasesComponent,
    AboutComponent,
    ContactComponent,
    DeliveryComponent,
    DeliveryInfoComponent,
    AdminAboutComponent,
    AdminContactComponent,
    About1Component,
    Contact1Component,
    MyPurchasesInfoComponent,
    AdminGetProductByIdComponent,
    BaymentComponent,
    PageNotFoundComponent,
    Serch1Component,
    Serch2Component,
    AdminSearchComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
