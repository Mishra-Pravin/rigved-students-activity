import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  // template: `
  //   <p>
  //     sexample works!
  //   </p>
  //   <h2><trong>{{employee.name}}, your id is {{employee.id}} and salary is {{employee.salary}}</strong></h2>

  // `,
  templateUrl:'./example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee = { id: 10001, name: 'Tony', salary: 10200 }
  


}
