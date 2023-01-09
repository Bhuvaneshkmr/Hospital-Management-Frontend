import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cooke:CookieService) { }


  logoutReceptionist(): void {
    // Remove tokens, profile, and expiration data
    localStorage.removeItem('receptionistId');
    
    
  }
  logoutAdmin (): void {
    // Remove tokens, profile, and expiration data
    localStorage.removeItem('adminId');
    
  }
  logoutDoctor(): void {
    // Remove tokens, profile, and expiration data
    localStorage.removeItem('doctorId');
    
  }
}
