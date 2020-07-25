import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getEpubFile() {
    this.apiService.postdata(environment.api_url + '/book-store/epub-file', { searchKey: '' }).subscribe(res => {
      if (res['status'] === 'success') {
        console.log(res);
      }
    })
  }

}
