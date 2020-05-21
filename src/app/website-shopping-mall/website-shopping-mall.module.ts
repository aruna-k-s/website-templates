import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteShoppingMallRoutingModule } from './website-shopping-mall-routing.module';
import { WebsiteDetailsComponent } from './website-details/website-details.component';
import { WebsiteDemoComponent } from './website-demo/website-demo.component';
import { WebsiteShoppingMallComponent } from './website-shopping-mall.component';

@NgModule({
  declarations: [WebsiteShoppingMallComponent, WebsiteDetailsComponent, WebsiteDemoComponent],
  imports: [
    CommonModule,
    WebsiteShoppingMallRoutingModule
  ]
})
export class WebsiteShoppingMallModule { }
