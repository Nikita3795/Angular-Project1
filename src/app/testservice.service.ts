import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  employee:any
  constructor() {
    this.employee=[
    {
empid:"111",ename:"nikita",sal:50000
   },
   {
    empid:"112",ename:"niita",sal:90000
       },
       {
        empid:"113",ename:"priti",sal:88000
           }
  ]
}

courses=["java","python","mern","testing"]

message="Welcome to my test service"

 getEmployee(){
  return this.employee
 }
}
