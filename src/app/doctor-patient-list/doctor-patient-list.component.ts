import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from '../Patient';
import { DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-doctor-patient-list',
  templateUrl: './doctor-patient-list.component.html',
  styleUrls: ['./doctor-patient-list.component.css']
})
export class DoctorPatientListComponent {


  patients!:Patient[];

  doctorId!:any;

  

  constructor(private router:Router,private cookie:CookieService, private Doctorservice :DoctorserviceService){}
  
  
  ngOnInit():void{
    this.doctorId=this.cookie.get('doctorId');
    this.getAllPatients();
  }
  
   getAllPatients(){
    this.Doctorservice.listOfPatientByDoctor(this.doctorId).subscribe(data =>{
      this.patients = data; 
    })
  }

}
