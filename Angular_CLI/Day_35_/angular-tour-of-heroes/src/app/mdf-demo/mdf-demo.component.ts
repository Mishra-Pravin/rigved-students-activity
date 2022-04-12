import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mdf-demo',
  templateUrl: './mdf-demo.component.html',
  styleUrls: ['./mdf-demo.component.css']
})
export class MdfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname=new FormControl('');
  lastname=new FormControl('');
}
