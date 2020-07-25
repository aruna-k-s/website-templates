import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo : 'main',
    pathMatch : 'full'
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule' ,
    data: { preload: true }
  },
  {
    path : 'book-store',
    loadChildren : './book-store/book-store.module#BookStoreModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
