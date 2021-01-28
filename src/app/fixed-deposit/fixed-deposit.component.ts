import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.css']
})
export class FixedDepositComponent implements OnInit {
  User:any=this.data.currentuser;

  constructor(private data:UserService) { }

  ngOnInit() {
  }

}
