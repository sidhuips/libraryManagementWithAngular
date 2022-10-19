
import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { BookAddComponent } from './book-add/book-add.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookRemoveComponent } from './book-remove/book-remove.component';
import { BookSearchComponent } from './book-search/book-search.component';


import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {  
    path: 'product/addBook',  
    component: BookAddComponent  
  },
  {  
    path: 'product/home',  
    component: HomeComponent  
  }  ,
  {  
    path: 'product/updateBook',  
    component: BookUpdateComponent  
  } ,
  {  
    path: 'product/removeBook',  
    component: BookRemoveComponent  
  } 
  ,
  {  
    path: 'product/searchBook',  
    component: BookSearchComponent  
  }  
];  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  