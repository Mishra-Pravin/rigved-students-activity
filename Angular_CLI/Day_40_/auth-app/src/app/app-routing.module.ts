import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"Login",component:LoginComponent},
  {path:"success/:name/:pass",component:SuccessComponent,canActivate:[AuthenticationGuard],children:[  
    {path:"Home",component:HomeComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
