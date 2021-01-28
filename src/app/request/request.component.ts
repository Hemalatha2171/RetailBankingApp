import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../add-user.service';
import{UserService}from'../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  pass=this.data.NewUser;

  constructor(private data:UserService,private router:Router) { }
approve(){
  
  if(confirm("Approval for New User")){
    this.router.navigate(['/admlogin']);
  }
  else
  {
    alert("Access Denied")
  }
}
  ngOnInit() {
  }

}
