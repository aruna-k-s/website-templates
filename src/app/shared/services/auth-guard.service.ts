import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private currentUser: CurrentUserService) { }

  canActivate(): Observable<boolean> {
    return this.currentUser.isAuthicated;
  }
}
