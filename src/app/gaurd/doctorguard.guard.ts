import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorserviceService } from '../service/doctorservice.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorguardGuard implements CanActivate {
  constructor(private Doctorservice:DoctorserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.Doctorservice.isloggedIn()){
        return true;
      }
      else{
        this.router.navigate(['/LoginComponent']);
        return false;
      }
  }
  
}
