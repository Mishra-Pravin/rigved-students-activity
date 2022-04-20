import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../user.service';


@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.css']
})
export class StoreUserComponent implements OnInit {

  constructor(private _service: UserService, private _builder: FormBuilder) { }

  ngOnInit(): void {
  }
  info : any | undefined = undefined;
  userForm : FormGroup = this._builder.group({
    _id: [], name : [], age : []
  });
  handleSubmit() {
    this._service.storeUser(this.userForm.value).subscribe((data) => {
      this.info = data;
    })
  }
}
