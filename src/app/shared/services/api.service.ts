import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getData(url, header?) {
    return this.httpClient.get(url, header);
  }

  postdata(url, body, header?) {
    return this.httpClient.post(url, body, header).pipe(tap(data => {
      if (data['status'] !== 'success') {
        {
          console.log('error msg');
        }
      }
    },
      errordata => {
        console.log(errordata);
      }));
  }

  putdata(url, body, headers?) {
    return this.httpClient.put(url, body, headers);
  }

  deleteData(url, body) {
    return this.httpClient.delete(url, body);
  }
}