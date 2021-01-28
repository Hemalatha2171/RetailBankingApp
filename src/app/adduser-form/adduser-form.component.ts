import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AddUserService}from'../add-user.service'
@Component({
  selector: 'app-adduser-form',
  templateUrl: './adduser-form.component.html',
  styleUrls: ['./adduser-form.component.css']
})
export class AdduserFormComponent {
  Udetail:any={
    uname:"",uid:"",uacc:"",uifsc:"",
    uph:"",uacctyp:"",ubh:"",

  };
  addusers(form){
    console.log(form.value)
  }

  constructor(private data : AddUserService, private router:Router) {
   
      
   }
   onSubmit(){
    this.data.userlist.push(this.Udetail)
      this.router.navigate(['/admlogin']);
  } 

}
