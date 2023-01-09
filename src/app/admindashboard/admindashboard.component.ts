import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from '../Admin';
import { AuthService } from '../auth.service';
import { Bill } from '../Bill';
import { AdminserviceService } from '../service/adminservice.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  adminId!:any;

  admin!:Admin;

  doctorsCount!:Number;

  receptionistCount!:Number;

  totalBillPercentageForAdmin!:Number;

  bill!:Bill[];

  constructor(private authService:AuthService,private router:Router,private cookie:CookieService,private adminservice:AdminserviceService,private Receptionistservice:ReceptionistserviceService) {
    this.adminId =  this.cookie.get('adminId');

    this.adminservice.readAdminById(this.adminId).subscribe(data=>{
      this.admin=data;
    })
   }

  

  logout(){
    this.authService.logoutAdmin();
    this.cookie.delete('adminId');
    this.cookie.delete('adminUserName');
    this.router.navigate(['AdminloginComponent']);
  
  }


  ngOnInit() {

    this.Receptionistservice.doctorsCount().subscribe(data=>{
      this.doctorsCount=data;
    })

    this.adminservice.receptionistCount().subscribe(data=>{
      this.receptionistCount=data;
    })

    this.adminservice.totalBillPercentageForAdmin().subscribe(data=>{
      this.totalBillPercentageForAdmin=data;
    })


    this.adminservice.totalBill().subscribe(data=>{
      this.bill=data;
    })




  

  }


 
  




}
