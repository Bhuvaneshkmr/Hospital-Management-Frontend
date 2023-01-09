import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-existingpatient',
  templateUrl: './existingpatient.component.html',
  styleUrls: ['./existingpatient.component.css']
})
export class ExistingpatientComponent {

  searchNameP!:any;

  patients!:Patient[];
  
  addPatient!:Patient[];

  // patient!:  Patient;
 
  // patientName!:String;
 
  constructor(private router: Router,private activeRouter : ActivatedRoute,private receptionistService :ReceptionistserviceService) {
 
   }
 
   ngOnInit(){

    this.getAllPatients();
 
    //  this.patientName = this.activeRouter.snapshot.params[`patientName`];
 
    //  this.receptionistService.readPatient(this.patientName).subscribe(data=>{
    //    console.log(data);
    //    this.addPatient = data;
    //  },
    //  )
 
   }

   getAllPatients(){
    this.receptionistService.readAllPatient().subscribe(data =>{
      this.patients = data; 
    })

   
  }

  onClick(patientId:Number){
    this.router.navigate(['/bookappointmentcomponent/'+`${patientId}`]);
  }


}
