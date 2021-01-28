import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  User:any=this.data.currentuser;

  constructor(private data:UserService,private router :Router) { }
detail : any={
  uacc:"",sbal:"",
};
  ngOnInit() {
  }
  onSubmit()  {
    console.log (this.data.NewUser)
    this.data.NewUser.forEach((element,i) => {
      console.log(i)
      if(this.detail.uacc==element.uacc){
        this.data.NewUser[i].bal = this.data.NewUser[i].bal + this.detail.sbal
        console.log (this.data.NewUser[i].bal)
        this.data.NewUser.forEach((element,i) => {
         if(this.data.currentuser.uacc==element.uacc){
          this.data.NewUser[i].bal = this.data.NewUser[i].bal - this.detail.sbal
          console.log (this.data.NewUser[i].bal)
          this.router.navigate(["./successpage"])
         }
         
       });
      }
      
    });
    
  }

}
