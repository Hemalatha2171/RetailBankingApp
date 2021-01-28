import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
cnt:any;
  constructor() { }
X=100;
userlist:any=[
  {uid:'01', uacc:'9876543210987', uname:'Anurekha', uph:'9754213406',
  uacctyp:'Saving Account', uifsc:'CITI0344444',ubh:'Anna Nagar-Chennai'},
       {uid:'02', uacc:'9876543210988', uname:'Aakash Kumar', uph:'9779905463',
       uacctyp:'Current Account', uifsc:'CITI0344455',ubh:'porur-Chennai'},
       {uid:'03', uacc:'9876543210989', uname:'Brindha Gopal', uph:'9987650932',
       uacctyp:'Salary Account', uifsc:'CITI0344466',ubh:' V.V Nagar-Madurai'},
       {uid:'04', uacc:'9876543210990', uname:'Chinna', uph:'7659873423',
       uacctyp:'Current Account', uifsc:'CITI0344444',ubh:'T.Nagar-Chennai'},
       {uid:'05', uacc:'9876543210991', uname:'Hemalatha', uph:'9807564123',
       uacctyp:'NIR Account', uifsc:'CITI0344488',ubh:'Allapakkam-Chennai'},
]


}
