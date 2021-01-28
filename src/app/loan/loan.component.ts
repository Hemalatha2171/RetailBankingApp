import { Component, OnInit } from '@angular/core';
import{UserService}from'../user.service'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  User:any=this.data.currentuser;

  constructor(private data : UserService) { }

  ngOnInit() {
  }

}
