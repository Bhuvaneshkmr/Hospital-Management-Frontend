import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from '../Receptionist';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-receptionist-list',
  templateUrl: './receptionist-list.component.html',
  styleUrls: ['./receptionist-list.component.css']
})
export class ReceptionistListComponent {

  receptionists!:Receptionist[];

  receptionistId!:Number;

constructor(private router:Router,private activeRouter : ActivatedRoute, private Adminservice :AdminserviceService){}


ngOnInit():void{
  this.getAllReceptionist();

  this.receptionistId = this.activeRouter.snapshot.params['receptionistId'];
}

 getAllReceptionist(){
  this.Adminservice.allReceptionist().subscribe(data =>{
    this.receptionists = data; 
  })
}



patientList(receptionistId: Number){
  this.router.navigate(['/ListOfPatientByReceptionist', receptionistId]);
}

}
