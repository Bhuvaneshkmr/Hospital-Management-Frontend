import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookAppointment } from '../BookAppointment';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-active-appointments',
  templateUrl: './active-appointments.component.html',
  styleUrls: ['./active-appointments.component.css']
})
export class ActiveAppointmentsComponent {

  searchName!: any;

  bookAppointments!:BookAppointment[];


  constructor(private router:Router,private receptionistService :ReceptionistserviceService){}

  ngOnInit() {
    this.getAllAppointments();
  }


   getAllAppointments(){
    this.receptionistService.activeAppointments().subscribe(data =>{
      
      this.bookAppointments=data;
    })
  }

}
