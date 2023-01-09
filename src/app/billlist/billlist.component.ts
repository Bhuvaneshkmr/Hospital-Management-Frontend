import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Bill } from '../Bill';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-billlist',
  templateUrl: './billlist.component.html',
  styleUrls: ['./billlist.component.css']
})
export class BilllistComponent {

  

  bills!:Bill[];

constructor(private router:Router,  private cookie: CookieService, private receptionistservice :ReceptionistserviceService ){}

ngOnInit(){
  this.allBill();
}

  allBill(){
 
       this.receptionistservice.allBill().subscribe(data =>{
              this.bills = data}); 
 
   }

}
