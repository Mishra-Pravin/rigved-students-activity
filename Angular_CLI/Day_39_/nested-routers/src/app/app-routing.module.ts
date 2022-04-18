import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
    
import { HomeComponent } from './home/home.component';  
import { PostsComponent } from './posts/posts.component';  
import { CreateComponent } from './posts/create/create.component';
import { DetailComponent } from './posts/detail/detail.component';

const routes: Routes = [  
  {  
      path: '',  
      component: HomeComponent  
  },  
  {  
      path: 'posts',  
      children: [  
        {  
          path: '',  
          component: PostsComponent  
        },  
        {  
            path: 'create',  
            component: CreateComponent  
        },  
        {  
            path: 'detail',  
            component: DetailComponent  
        }  
    ]  
  }  
];  
     
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  