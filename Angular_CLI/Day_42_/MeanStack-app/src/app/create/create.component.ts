import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _service: ProductService, private _builder: FormBuilder) { }

  ngOnInit(): void {
  }
  info : any | undefined = undefined;
  userForm : FormGroup = this._builder.group({
    _id: [], Product_Name: [] ,SKU:[],Description:[],Price:[],Stock_Level:[]
  });
  handleSubmit() {
    this._service.storeUser(this.userForm.value).subscribe((data) => {
      this.info = data;
      this.userForm.reset({})

    })
  }
}
