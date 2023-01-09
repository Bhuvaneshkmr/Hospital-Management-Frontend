import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.css']
})
export class AlldoctorsComponent {

  doctors!:Doctor[];

  constructor(private router:Router,private receptionistService :ReceptionistserviceService){}

  ngOnInit() {
    this.getAllDoctors();
  }


   getAllDoctors(){
    this.receptionistService.readAllDoctor().subscribe(data =>{
      
      this.doctors=data;
    })
  }



}
