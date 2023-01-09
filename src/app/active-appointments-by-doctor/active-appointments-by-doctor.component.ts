import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BookAppointment } from '../BookAppointment';
import { DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-active-appointments-by-doctor',
  templateUrl: './active-appointments-by-doctor.component.html',
  styleUrls: ['./active-appointments-by-doctor.component.css']
})
export class ActiveAppointmentsByDoctorComponent {


  doctorId!:any;

  searchName!:any;

  bookAppointment!:BookAppointment[];

  constructor(private router:Router,private cookie:CookieService,private activeRouter : ActivatedRoute, private Doctorservice :DoctorserviceService){}


  ngOnInit():void{

    this.doctorId=this.cookie.get('doctorId');

    this.Doctorservice.activeAppointmentsByDoctor(this.doctorId).subscribe(data=>{
      this.bookAppointment=data;

    })

  }



}
