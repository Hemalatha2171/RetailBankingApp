import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdmloginComponent } from './admlogin/admlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdduserFormComponent } from './adduser-form/adduser-form.component';
import { SignupComponent } from './signup/signup.component';
import { RequestComponent } from './request/request.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { LoanComponent } from './loan/loan.component';
import { SuccesspageComponent } from './successpage/successpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdmloginComponent,
    UserloginComponent,
    PageNotFoundComponent,
    AdduserFormComponent,
    SignupComponent,
    RequestComponent,
    TransactionComponent,
    FixedDepositComponent,
    LoanComponent,
    SuccesspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
