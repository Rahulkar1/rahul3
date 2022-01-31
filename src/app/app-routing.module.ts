import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { BankingComponent } from './banking/banking.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { NormalCalculatorComponent } from './normal-calculator/normal-calculator.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'normalcalci',
    component:NormalCalculatorComponent
  },
  {
    path:'loan',
    component:LoanComponent
  },
  {
    path:'add_acc',
    component:AddAccountComponent
  },
  {
    path:'banking',
    component:BankingComponent
  },
  {
    path:'check_bal',
    component:CheckBalanceComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
