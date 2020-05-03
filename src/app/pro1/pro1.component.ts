import { Component, OnInit } from '@angular/core';
declare var myFunction:any;
declare var myFunction1:any;
declare var myFunction2:any;


@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  callMyFunction(){
    new myFunction();
  }

  callMyFunction1(){
    new myFunction1();
  }
  callMyFunction2(){
    new myFunction2();
  }
  
}
