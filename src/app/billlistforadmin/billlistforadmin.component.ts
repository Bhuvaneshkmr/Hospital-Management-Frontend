import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Bill } from '../Bill';
import { AdminserviceService } from '../service/adminservice.service';
import { DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-billlistforadmin',
  templateUrl: './billlistforadmin.component.html',
  styleUrls: ['./billlistforadmin.component.css']
})
export class BilllistforadminComponent {


  bills!:Bill[];

constructor(private router:Router,  private cookie: CookieService, private Adminservice :AdminserviceService ){}

ngOnInit(){
  this.allBill();
}

  allBill(){
 
       this.Adminservice.totalBill().subscribe(data =>{
              this.bills = data}); 
 
   }


}
