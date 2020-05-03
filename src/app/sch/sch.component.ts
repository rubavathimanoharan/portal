import { Component, OnInit } from '@angular/core';
 declare var showDivs:any;
 declare var plusDivs:any;
declare var currentDiv:any;

@Component({
  selector: 'app-sch',
  templateUrl: './sch.component.html',
  styleUrls: ['./sch.component.css']
})
export class SchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

callShowDivs()
{
  new showDivs();
}
callPlusDivs()
{
  new plusDivs();
}
callCurrentDiv()
{
  new currentDiv();
}

}
