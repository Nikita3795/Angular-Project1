import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent {
  constructor( private service:TestserviceService){}
  msg:any
  employeeInfo:any
  ngOnInit(){
   this.employeeInfo= this.service.getEmployee()
   this.msg = this.msg()
  }


}
