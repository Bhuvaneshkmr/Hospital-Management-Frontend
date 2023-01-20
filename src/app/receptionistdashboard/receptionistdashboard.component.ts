import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { Receptionist } from '../Receptionist';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-receptionistdashboard',
  templateUrl: './receptionistdashboard.component.html',
  styleUrls: ['./receptionistdashboard.component.css']
})
export class ReceptionistdashboardComponent {

  receptionistId!:any;
  reception!:Receptionist;

  patientCount!:Number;

  activeAppointmentsCount!:Number;

  totalBillPercentage!:Number;

  totalVistForTodatCount!:Number;

  doctorsCount!:Number;

  allAppointmentsCount!:Number;

  billCount!:Number;


  constructor(private authService: AuthService,private router:Router,private cookie:CookieService,private receptionService:ReceptionistserviceService) {
  }


  ngOnInit() {
    this.getReceptionistById();

    this.receptionService.patientCount().subscribe(data=>{
      this.patientCount=data;
    })

    this.receptionService.activeAppointmentsCount().subscribe(data=>{
      this.activeAppointmentsCount=data;
    })

    this.receptionService.totalBillPercentage().subscribe(data=>{
      this.totalBillPercentage=data;
    })

    this.receptionService.totalVistForTodatCount().subscribe(data=>{
      this.totalVistForTodatCount=data;
    })

    this.receptionService.doctorsCount().subscribe(data=>{
      this.doctorsCount=data;
    })

    this.receptionService.allAppointmentsCount().subscribe(data=>{
      this.allAppointmentsCount=data;
    })

    this.receptionService.billCount().subscribe(data=>{
      this.billCount=data;
    })

    
  }

  getReceptionistById(){

    this.receptionistId=this.cookie.get('receptionistId');

    this.receptionService.getReceptionistById(this.receptionistId).subscribe(data =>{
      this.reception=data;
    })


  }


  logout(){
    this.authService.logoutReceptionist();
    this.cookie.delete('receptionistId');
    this.cookie.delete('receptionistUserName');
    this.router.navigate(['LoginComponent']);
    

  }

}
