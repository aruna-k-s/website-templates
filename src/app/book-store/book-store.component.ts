import { Component, OnInit } from '@angular/core';
import Epub, { EpubCFI } from 'epubjs';


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent implements OnInit {

  title = 'book-store';
  rendition: any;
  displayed: any;
  book: any;
  constructor() { }

  ngOnInit() {
    let xyz = new EpubCFI();
    this.book = Epub("../assets/epubFiles/Eat That Frog 21 Great Ways to Stop Procrastinating and Get More Done in Less Time by Brian Tracy.epub");
    console.log(this.book, xyz);

    this.rendition = this.book.renderTo(document.getElementById('area'), { width: 600, height: 400 });
    this.displayed = this.rendition.display();
  }
  next() {
    this.rendition.next();
  }
}
