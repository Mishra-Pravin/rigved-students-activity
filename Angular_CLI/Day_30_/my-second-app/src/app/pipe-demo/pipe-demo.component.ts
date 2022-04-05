import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl:'./pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }
  users=[
    {name:'Alex', gender:'Male', address:{state:'KA', city:'BLR'}},
    {name:'Jennifer', gender:'Female', address:{state:'MH', city:'MBI'}},
    {name:'Zaheer', gender:'Male', address:{state:'KA', city:'PUN'}}
  ]


  ngOnInit(): void {
  }
  
}
