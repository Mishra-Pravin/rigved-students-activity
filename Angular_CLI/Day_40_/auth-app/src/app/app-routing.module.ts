import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"Login",component:LoginComponent},
  {path:"success/:name/:pass",component:SuccessComponent,canActivate:[AuthenticationGuard],children:[  

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
