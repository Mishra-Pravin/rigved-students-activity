import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _service: ProductService) { }

  ngOnInit(): void {
  }
  data:any|undefined=undefined
  user:any | undefined=undefined
  id=new FormControl('');
  SKU=new FormControl('');

  handleUpdate(){
    let id=this.id.value;
    let SKU=this.SKU.value;
    this._service.updateUser(id,SKU,this.data).subscribe((data)=>{
      this.user=data
     

    })
  }

}