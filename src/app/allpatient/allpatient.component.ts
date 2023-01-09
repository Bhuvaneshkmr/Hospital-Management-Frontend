import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Patient } from 'src/app/Patient';
import { ReceptionistserviceService } from '../service/receptionistservice.service';


@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.css']
})
export class AllpatientComponent implements OnInit{

  patients!:Patient[];

constructor(private router:Router, private receptionistService :ReceptionistserviceService){}


ngOnInit():void{
  this.getAllPatients();
}

 getAllPatients(){
  this.receptionistService.readAllPatient().subscribe(data =>{
    this.patients = data; 
  })
}
}


