import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmloginComponent } from './admlogin/admlogin.component';
import { HeaderComponent } from './header/header.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';
import{AdduserFormComponent} from'./adduser-form/adduser-form.component';
import{SignupComponent}from './signup/signup.component';
import { RequestComponent } from './request/request.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { LoanComponent } from './loan/loan.component';
import { SuccesspageComponent } from './successpage/successpage.component';



const routes: Routes = [
    
  {​​​​​path:'header', component:HeaderComponent}​​​​​,
  {path:'adduser-form', component:AdduserFormComponent},
  {​​​​​path:'admlogin', component:AdmloginComponent,}​​​​​,
  {​​​​​path:'userlogin', component:UserloginComponent, }​​​​​,
  {​​​​​path:'request', component:RequestComponent, }​​​​​,
  {​​​​​path:'signup', component:SignupComponent, }​​​​​,
  {​​​​​path:'transaction', component:TransactionComponent, }​​​​​,
  {​​​​​path:'fixed-deposit', component:FixedDepositComponent, }​​​​​,
  {​​​​​path:'successpage', component:SuccesspageComponent, }​​​​​,
  {​​​​​path:'loan', component:LoanComponent, }​​​​​,
  {​​​​​path:'', redirectTo:'/header',pathMatch:'full'}​​​​​,
  {path: '**', component: PageNotFoundComponent}

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
