import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{AddUserService}from'../add-user.service'
@Component({
  selector: 'app-admlogin',
  templateUrl: './admlogin.component.html',
  styleUrls: ['./admlogin.component.css']
})
export class AdmloginComponent implements OnInit {
  UserForm: FormGroup;
  Submitted = false;
  pass=this.data.userlist;
  constructor(private formBuilder : FormBuilder,private data:AddUserService) { }


  
  ngOnInit() {
    
  }
  //user list array
  customers:any=[
  ];
 
    
    //validation for user form
    get uform(){
      return this.UserForm.controls;
    }
    onSubmit(){
      this.Submitted = true;

          //stop here if form is invalid
             if(this.UserForm.invalid){
                return;
             }
          }
      
          public onClick(user: any= "ABC Bank Customer") {
            if(this.customers.CustName = "Anurekha"){
              alert(user+" Loan Amount Rs-1,00,000")
            }
          }
  
}

