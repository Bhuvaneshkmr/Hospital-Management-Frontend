import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistguardGuard implements CanActivate {

  constructor(private Receptionistservice:ReceptionistserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.Receptionistservice.isloggedIn()){
        return true;
      }
      else{
        this.router.navigate(['/LoginComponent']);
        return false;
      }
  }
  
}
