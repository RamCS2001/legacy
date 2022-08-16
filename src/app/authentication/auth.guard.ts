import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbUtilityService } from '../db-utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private myDb: DbUtilityService,private router: Router) { }

  canActivate() {

    if(this.myDb.isLoggedIn()){
      return true;
    }
    else{
      const redirectUrl = '/login';
      // Redirect the user
      this.router.navigate([redirectUrl]);

      return false;
    }
  }
  
}
