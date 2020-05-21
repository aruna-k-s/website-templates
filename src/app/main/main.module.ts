import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemSuggestionComponent } from './item-suggestion/item-suggestion.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent, ShoppingMallComponent, ItemDetailsComponent, ItemSuggestionComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
