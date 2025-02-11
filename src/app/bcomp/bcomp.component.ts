import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent {
  constructor( private s : TestserviceService){}
  newArr : any
 ngOnInit()
 {
  this.newArr = this.s.courses
   
 }
}
