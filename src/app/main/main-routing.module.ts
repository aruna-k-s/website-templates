import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'shopping-mall',
    component: ShoppingMallComponent
  },
  {
    path: 'item/:item-type/:name',
    component: ItemDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
