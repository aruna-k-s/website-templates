import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemSuggestionComponent } from './item-suggestion/item-suggestion.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared/shared-material.module';

@NgModule({
  declarations: [
    MainComponent,
    ShoppingMallComponent,
    ItemDetailsComponent,
    ItemSuggestionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SharedMaterialModule
  ]
})
export class MainModule { }
