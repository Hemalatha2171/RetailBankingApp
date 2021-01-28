import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AddUserService } from '../add-user.service';
import{UserService}from'../user.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Rdetail:any={
    name:"",ads:"",cntno:"",usrname:"",
    pwd:"",
  };
  addusers(form){
    console.log(form.value)
  }

  constructor(private data : UserService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
     this.data.NewUser.push(this.Rdetail)
      this.router.navigate(['/header']);
      
      // alert("Successfully submitted --->"+" Wait for ABC Bank Admin Approval ")
      
  } 
}
