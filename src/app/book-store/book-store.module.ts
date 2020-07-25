import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookStoreComponent } from './book-store.component';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  declarations: [BookStoreComponent, BookPreviewComponent, BookCartComponent, BookDetailsComponent, BooksListComponent],
  imports: [
    CommonModule,
    BookStoreRoutingModule
  ]
})
export class BookStoreModule { }
