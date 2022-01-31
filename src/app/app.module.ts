import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NormalCalculatorComponent } from './normal-calculator/normal-calculator.component';
import { LoanComponent } from './loan/loan.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { BankingComponent } from './banking/banking.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ServicesComponent,
    NormalCalculatorComponent,
    LoanComponent,
    AddAccountComponent,
    BankingComponent,
    CheckBalanceComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
