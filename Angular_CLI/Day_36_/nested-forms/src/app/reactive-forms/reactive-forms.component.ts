import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  profileForm ! : FormGroup
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.profileForm  = this.fb.group({
      firstName: ['',Validators.required ],
      lastName: ['',Validators.required],
      address: this.fb.group({
        State: ['', Validators.required],
        city: ['', Validators.required],
        pin: ['', Validators.required]
      })
    });
  };
onSubmit(){
  console.log(this.profileForm .value);
  this.profileForm.reset({});
}
}