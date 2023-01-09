import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { AdminserviceService } from '../service/adminservice.service';
import { DoctorserviceService } from '../service/doctorservice.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-admindoctorslist',
  templateUrl: './admindoctorslist.component.html',
  styleUrls: ['./admindoctorslist.component.css']
})
export class AdmindoctorslistComponent {

  doctors!:Doctor[];

  constructor(private router:Router,private receptionistService :ReceptionistserviceService , private Adminservice : AdminserviceService){}

  ngOnInit() {
    this.getAllDoctors();
  }


   getAllDoctors(){
    this.receptionistService.readAllDoctor().subscribe(data =>{
      
      this.doctors=data;
    })
  }


  deleteDoctor(doctorId: Number){
    this.Adminservice.deleteDoctor(doctorId).subscribe(data => {
      console.log(data);
      // this.getAllDoctors();
    })
  }

}
