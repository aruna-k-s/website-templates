import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {


  isAunthicatedAsObservable = new ReplaySubject<boolean>(1);
  isAuthicated = this.isAunthicatedAsObservable.asObservable();
  subsciption = this.isAunthicatedAsObservable.subscribe(res => {
    if (!res) {
      this.router.navigate(['/login']);
    }
  });


  constructor(private router: Router) { }

}
