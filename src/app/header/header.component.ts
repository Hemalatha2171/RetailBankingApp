import { Component, OnInit } from '@angular/core';
import { VerificationService } from '../verification.service';
import {FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import{UserService}from'../user.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registerForm: FormGroup;
 
  submitted = false;
 
    constructor(private data : UserService,private formBuilder: FormBuilder , private router: Router) { }
     mail ="admin@abc.com" ;
     pwd2 = "Indi@000";
    ngOnInit() {
     
      const admin="";
      const user="";
      
       
        
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
            
        },);
       
    
    }

   
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        
        if(this.registerForm.controls.email.value === this.mail && this.registerForm.controls.password.value === this.pwd2 )  { 
         
            this.router.navigate(['/admlogin']);
        
        }
        else{
          this.data.NewUser.forEach((e) => {
            console.log('for'+ e)
           if(this.registerForm.controls.email.value === e.usrname && this.registerForm.controls.password.value === e.pwd ){
           this.data.currentuser=e
            this.router.navigate(['/userlogin']);
           }
           
          //  if( this.registerForm.controls.email.value != e.usrname && this.registerForm.controls.password.value != e.pwd ){
          //   alert("UnAuthorized User,"+" Please create a account(signup)");
          // }  
          })
    
        }
}
   
    onReset() {
          this.submitted = false;
          // stop here if form is invalid
          if (this.registerForm.valid) {
              return;
          } 
    }  
}

