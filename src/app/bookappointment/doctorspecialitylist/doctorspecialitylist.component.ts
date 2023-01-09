import { ConditionalExpr } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BookAppointment } from 'src/app/BookAppointment';
import { ReceptionistserviceService } from 'src/app/service/receptionistservice.service';
import { Doctor } from '../../Doctor';
import { BookappointmentComponent } from '../bookappointment.component';

@Component({
  selector: 'app-doctorspecialitylist',
  templateUrl: './doctorspecialitylist.component.html',
  styleUrls: ['./doctorspecialitylist.component.css']
})
export class DoctorspecialitylistComponent {

  doctors!: Doctor[];

  appointment!:BookAppointment;

  receptionistId!:any;
  

constructor(private service:ReceptionistserviceService,private router:Router,private cookie:CookieService){
  this.receptionistId =this.cookie.get('receptionistId')
}


  ngOnInit(){
   this.doctors= this.service.getDoctors();
   console.log(this.doctors);
  }
  
  add(doctor:Doctor){
    this.appointment= this.service.getAppointment();
    console.log(this.appointment);
    this.appointment.doctorId=doctor.doctorId;
    this.appointment.doctorName=doctor.doctorName;
    this.submit();
    alert("Appointment Booked Successfully");
    
    this.router.navigate(['/Allappointment']);
  }


  submit(){

    
    this.service.saveAppointment(this.appointment,this.appointment.patientId,this.receptionistId).subscribe(data=>{
      this.appointment=data;

      

      
    })
  }

      
     


  
  
}
