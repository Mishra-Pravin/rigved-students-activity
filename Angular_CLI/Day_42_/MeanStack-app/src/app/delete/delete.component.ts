import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private _service: ProductService) { }
  
  ngOnInit(): void {
  }
  user: any | undefined=undefined

  _id=new FormControl('')
  handleGet(id:number){
    console.log(id)
    this._service.deleteUser(id).subscribe((data)=>{
      this.user=data;
      this._id.reset({})

    })
  }

}