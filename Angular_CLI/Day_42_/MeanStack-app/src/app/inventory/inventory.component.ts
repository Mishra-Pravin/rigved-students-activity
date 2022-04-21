import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  users : any[] | undefined = undefined;
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
  }
  handleClick() : void {
    this._service.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}