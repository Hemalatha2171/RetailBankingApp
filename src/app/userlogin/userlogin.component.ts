import { Component, OnInit } from '@angular/core';
import{UserService}from'../user.service'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private data : UserService) { }
User:any=this.data.currentuser;
  ngOnInit() {
  }

}
