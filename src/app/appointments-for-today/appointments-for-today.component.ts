import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookAppointment } from '../BookAppointment';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-appointments-for-today',
  templateUrl: './appointments-for-today.component.html',
  styleUrls: ['./appointments-for-today.component.css']
})
export class AppointmentsForTodayComponent {

  searchName!: any;

  bookAppointments!:BookAppointment[];


  constructor(private router:Router,private receptionistService :ReceptionistserviceService){}

  ngOnInit() {
    this.getAllDoctors();
  }


   getAllDoctors(){
    this.receptionistService.appointmentsForToday().subscribe(data =>{
      
      this.bookAppointments=data;
    })
  }

}
