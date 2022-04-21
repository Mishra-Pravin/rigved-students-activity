import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { FindComponent } from './find/find.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:CreateComponent},
  {path:"Create",component:CreateComponent},
  {path:"Inventory",component:InventoryComponent},
  {path:"Find",component:FindComponent},
  {path:"Delete",component:DeleteComponent},
  {path:"Update",component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
