import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookAppointment } from '../BookAppointment';
import { DoctorserviceService } from '../service/doctorservice.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-update-appointment-status-by-doctor',
  templateUrl: './update-appointment-status-by-doctor.component.html',
  styleUrls: ['./update-appointment-status-by-doctor.component.css']
})
export class UpdateAppointmentStatusByDoctorComponent {

  appointmentNo!: number;
  bookAppointment!: BookAppointment;

  bookForm !: FormGroup;
  constructor(
    private Activate: ActivatedRoute,
    private router: Router,
    private doctorService:DoctorserviceService,
    private formBuilder: FormBuilder,
    private receptionService:ReceptionistserviceService,
  ){
    this.bookForm=this.formBuilder.group({
      appointmentStatus:['',[Validators.required]],
    
     })
  }


  ngOnInit(){
    this.appointmentNo = this.Activate.snapshot.params['appointmentNo'];

    this.receptionService.getAppointmentById(this.appointmentNo)
      .subscribe(data =>{
        console.log(data)
        this.bookAppointment = data;
      }, err => console.log(err)
      );
  }


  updateAppointment(){
    this.doctorService.updateAppointmentByDoctor(this.appointmentNo, this.bookAppointment)
    .subscribe(data =>{
     console.log(data);
       this.bookAppointment = new BookAppointment();
       alert("Updated Successfully");
      //data= this.bookAppointment ;

      // this.goToBookList();
    }, err => console.log(err));
  }


  onSubmit(){
    
      console.log( this.bookAppointment);
      // this.updateAppointment();
    
      this.bookAppointment.appointmentStatus=this.F['appointmentStatus'].value;
      this.updateAppointment();
   
   
  }

  get F(){
    return this.bookForm.controls;
  }

}
