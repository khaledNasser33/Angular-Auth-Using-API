import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileGuardService implements CanActivate {

  constructor(private router: Router, private token:TokenService) { }
  canActivate():boolean  {
    if(this.token.isLoggedIn()){
      return true;
    }else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
