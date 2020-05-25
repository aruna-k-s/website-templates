import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteShoppingMallComponent } from './website-shopping-mall.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WebsiteShoppingMallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteShoppingMallRoutingModule { }
