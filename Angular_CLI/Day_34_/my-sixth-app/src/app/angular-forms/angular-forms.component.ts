import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  formSubmit(formValue: any): void {
    console.log(formValue);

  }

}
