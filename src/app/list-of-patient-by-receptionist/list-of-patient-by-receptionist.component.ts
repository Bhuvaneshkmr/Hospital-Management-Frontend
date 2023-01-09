import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-list-of-patient-by-receptionist',
  templateUrl: './list-of-patient-by-receptionist.component.html',
  styleUrls: ['./list-of-patient-by-receptionist.component.css']
})
export class ListOfPatientByReceptionistComponent {

  patients!:Patient[];

  receptionistId!:Number;

  constructor(private router: Router,private activate:ActivatedRoute,private Adminservice :AdminserviceService ) {}


  ngOnInit() :void{
    this.receptionistId = this.activate.snapshot.params['receptionistId'];
    console.log(this.receptionistId);
    // this.loadData();
     this.Adminservice.listOfPatientByReceptionist(this.receptionistId).subscribe(data=>{
      this.patients=data;
     })
  }

}
