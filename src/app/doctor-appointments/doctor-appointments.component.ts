import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { refCount } from 'rxjs';
import { BookAppointment } from '../BookAppointment';
import { DoctorserviceService } from '../service/doctorservice.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent {
[x: string]: any;

  searchName!:any;

  date!:any;

  bookAppointments!:BookAppointment[];

  bookAppointment1!:BookAppointment;

  appoint!:BookAppointment;


  appointmentNo!:any;

  // cook!:CookieService[];

  doctorId!:any;

  constructor(private router:Router,private activate : ActivatedRoute , private cookie: CookieService, private Doctorservice :DoctorserviceService , private receptionistService:ReceptionistserviceService){}
  
  
  ngOnInit():void{
    this.appointment();
  

    this.bookAppointment1 = new BookAppointment();
    this.appointmentNo = this.activate.snapshot.params['appointmentNo'];

    this.receptionistService.getAppointmentById(this.appointmentNo)
      .subscribe(data =>{
        console.log(data)
        this.bookAppointment1 = data;
      }, err => console.log(err));

  }


  onOptionChange(value:any,appointment:BookAppointment,appointmentNo:Number){
    appointment.appointmentStatus=value;
      this.Doctorservice.updateAppointmentByDoctor(appointmentNo,appointment).subscribe(data=>{
       console.log(appointment)
      })
  }
  
  

  appointment(){

   this.doctorId =  this.cookie.get('doctorId');

      this.Doctorservice.readAppointment(this.doctorId).subscribe(data =>{
             this.bookAppointments = data}); 

  }


  updateAppointStatus(appointmentNo: number){
    this.router.navigate(['/UpdateAppointmentStatusByDoctor', appointmentNo]);
  }


}
   
  