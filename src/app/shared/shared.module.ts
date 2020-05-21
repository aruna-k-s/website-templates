import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { UserSharedViewContainerComponent } from './user-shared-view-container/user-shared-view-container.component';
import { MagnifiedViewImageComponent } from './magnified-view-image/magnified-view-image.component';

@NgModule({
  declarations: [ReviewComponent, UserSharedViewContainerComponent, MagnifiedViewImageComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
