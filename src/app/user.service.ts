import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  NewUser:any=[{name:"Anurekha Reddy",ads:"No-7 K.K.Nagar",cntno:"9754213406",usrname:"anurekha@gmail.com",
  pwd:"Rekha@0003",uacctyp:'Saving Account', uifsc:'CITI0344444',ubh:'Anna Nagar-Chennai',
  accstatus:"Active",loan:"1,50,000",loantype:"Personal loan",mnth:"53 Months",iprcnt:"9%",bal:45000,
  fd:"0.00",fdmnth:"Null",fdint:"0.00", uacc:'9876543210987'},

  {name:"Aakash",ads:"3B Porur",cntno:"9779905463",usrname:"aakash@gmail.com",
  pwd:"Akash@000", uacctyp:'Current Account', uifsc:'CITI0344455',ubh:'porur-Chennai',
  accstatus:"Active",loan:"50,000",loantype:"Personal loan",mnth:"19 Months",iprcnt:"3%",bal:80396,fd:"1,00,000",fdmnth:"12 months",fdint:"6%", uacc:'9876543210988'},

  {name:"Brindha Gopal",ads:"No-121 V.V nagar Madurai",cntno:"9987650932",usrname:"gopal@gmail.com",
  pwd:"Gopal@000", uacctyp:'Salary Account', uifsc:'CITI0344466',ubh:' V.V Nagar-Madurai',
  accstatus:"Active",loan:"Null",loantype:"Null",mnth:"Null",iprcnt:"0%",bal:525970,fd:"2,00,000", fdmnth:"30 months",fdint:"12%",uacc:'9876543210989'},

  {name:"Chinna",ads:"No-10 Anna Nagar",cntno:"7659873423",usrname:"chinna@gmail.com",
  pwd:"Chinna@000", uacctyp:'Current Account', uifsc:'CITI0344444',ubh:'T.Nagar-Chennai',
  accstatus:"Active",loan:"2,00,000",loantype:"Home loan",mnth:"65 Months",iprcnt:"11%",bal:60000,fd:"0.00",fdmnth:"Null",fdint:"0.00", uacc:'9876543210990'}, 

    {name:"Hemalatha",ads:"No-10 Anna Nagar",cntno:"9807564123",usrname:"hema@gmail.com",
  pwd:"heM@000g",uacctyp:'NIR Account', uifsc:'CITI0344488',ubh:'Allapakkam-Chennai',
  accstatus:"Active",loan:"Null",loantype:"Null",mnth:"Null",iprcnt:"11%",bal:245000 ,fd:"0.00", fdmnth:"Null",fdint:"0.00",uacc:'9876543210991'},


]
currentuser: any={};
}
