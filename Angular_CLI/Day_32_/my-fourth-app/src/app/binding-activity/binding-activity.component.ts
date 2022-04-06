import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-activity',
  templateUrl: './binding-activity.component.html',
  styleUrls: ['./binding-activity.component.css']
})
export class BindingActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students : any = [
    {RollNo:1,Name : "Ajay ",marks:40},
    {RollNo:2,Name : "Vijay ",marks:30},
    {RollNo:3,Name : "Manu ",marks:60},
    {RollNo:4,Name : "Sachin ",marks:20},
    {RollNo:5,Name : "Amit ",marks:70},
    {RollNo:6,Name : "Zaheer ",marks:80}
  ]
  rowspanValue = "5";
  colspanValue = "2";
  stocks = [{ name: "Mobile", brand: ["Vivo", "Oppo", "Oneplus"] },
              { name: "Laptop", brand: ["HP", "Dell", "Lenovo", "Acer"] }
  ]

}
