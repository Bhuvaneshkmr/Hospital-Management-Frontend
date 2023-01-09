import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-read-by-patient-name',
  templateUrl: './read-by-patient-name.component.html',
  styleUrls: ['./read-by-patient-name.component.css']
})
export class ReadByPatientNameComponent {

  addPatient!:Patient[];

 patient!:  Patient;

 patientName!:String;

 constructor(private router: Router,private activeRouter : ActivatedRoute,private receptionistService :ReceptionistserviceService) {

  }

  ngOnInit(){

    this.patientName = this.activeRouter.snapshot.params[`patientName`];

    this.receptionistService.readPatient(this.patientName).subscribe(data=>{
      console.log(data);
      this.addPatient = data;
    },
    )

  }


}
