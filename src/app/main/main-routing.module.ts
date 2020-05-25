import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'shopping-mall/:type',
        component: ShoppingMallComponent
      },
      {
        path: 'item/:item-type/:name',
        component: ItemDetailsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'website-templates',
        loadChildren: '../website-shopping-mall/website-shopping-mall.module#WebsiteShoppingMallModule',
        data: { preload: true }
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
