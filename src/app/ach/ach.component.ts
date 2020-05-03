import { Component, OnInit } from '@angular/core';
declare var snow:any;
declare var init:any;
declare var reset:any;
@Component({
  selector: 'app-ach',
  templateUrl: './ach.component.html',
  styleUrls: ['./ach.component.css']
})
export class AchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  callSnow(){
    new snow();
  }
  callInit(){
    new init();
  }
  callReset(){
    new reset();
  }

}
