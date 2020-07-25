import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const webToken = localStorage.getItem('jsonToken');
    if (webToken) {
      const cloned = req.clone({
        headers: req.headers.set(
          'Authorization', 'Bearer' + webToken
        )
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
