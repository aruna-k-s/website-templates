import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { BookStoreComponent } from './book-store.component';

const routes: Routes = [
  {
    path: '',
    component: BookStoreComponent,
    children: [
      {
        path: '',
        component: BookStoreComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookStoreRoutingModule { }
