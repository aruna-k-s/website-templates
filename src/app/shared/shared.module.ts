import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './components/review/review.component';
import { UserSharedViewContainerComponent } from './components/user-shared-view-container/user-shared-view-container.component';
import { MagnifiedViewImageComponent } from './components/magnified-view-image/magnified-view-image.component';
import { HowDoIHelpComponent } from './components/how-do-i-help/how-do-i-help.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from "@angular/router";
import { ApiService } from './services/api.service';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
  declarations: [
    ReviewComponent,
    UserSharedViewContainerComponent,
    MagnifiedViewImageComponent,
    HowDoIHelpComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    ReviewComponent,
    UserSharedViewContainerComponent,
    MagnifiedViewImageComponent,
    HowDoIHelpComponent,
    NavBarComponent
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
