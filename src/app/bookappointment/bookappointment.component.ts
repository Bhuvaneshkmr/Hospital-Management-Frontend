import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { BookAppointment, Reason } from '../BookAppointment';
import { Doctor, Speciality } from '../Doctor';
import { DoctorslistComponent } from '../doctorslist/doctorslist.component';
import { Patient } from '../Patient';
import { ReceptionistserviceService } from '../service/receptionistservice.service';
import { DoctorspecialitylistComponent } from './doctorspecialitylist/doctorspecialitylist.component';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent {

  // @ViewChild(DoctorspecialitylistComponent)addView!:DoctorspecialitylistComponent;

  bookAppointmentForm!: FormGroup;

  patientId!:Number;

  errorMessage!:any;

  doctors!:Doctor[];

  patient!:Patient;

  receptionistId!:any;

  speciality!:Speciality;

  others=false;

  val!:any;

  check:any;

  speci!:any;

  appointment :BookAppointment = new BookAppointment();

  submitted = false;

  constructor(private router: Router,private cookie:CookieService,private activate:ActivatedRoute,private formBuilder: FormBuilder,private receptionistService :ReceptionistserviceService ) {

    this.receptionistId=cookie.get('receptionistId');
    this.bookAppointmentForm = this.formBuilder.group({
      patientId: [,[Validators.required]],
      reason: [,[Validators.required]],
      doctorspeciality: [,[Validators.required]],
      appoinmentTime: [,[Validators.required]],
      appointmentDate: [,[Validators.required]],
      
     
    });
   
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if((charCode<97||charCode>122)&&(charCode<65||charCode>90) && charCode!=32){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  loadData(){
   
   

    this.bookAppointmentForm.controls['patientId'].setValue(this.patientId);
  }

  ngOnInit() :void{

    this.receptionistService.getSpeciality().subscribe(data=>{
      this.speci=data;
       console.log(this.speci);
    })
   



    this.patientId = this.activate.snapshot.params['PatientId'];
    console.log(this.patientId);
    this.loadData();
     this.receptionistService.readPatientById(this.patientId).subscribe(data=>{
      this.patient=data;
     })
  }

  onClick(value:string){
    if(value=="OTHERS"){
      this.others=true;
    }else{
      this.others=false;
    }
  }

   
    



  save(){

    // if(confirm("Are you sure! You want to book an Appointment")){

    
    // this.receptionistService.bookAppointment(this.appointment,this.receptionistId).subscribe(data =>{
    //    data=this.appointment;
    //    alert("Appointment Created Successfully")
    //   },(error=>{
    //     alert('Doctor Not Available at this Time');
    //    })
      
    //    ) ;
       
    //   }


      
      
 
  }

  onSubmit(){


    this.receptionistService.appoint(this.bookAppointmentForm.value.reason,this.bookAppointmentForm.value.doctorspeciality,this.bookAppointmentForm.value.appoinmentTime,
      this.bookAppointmentForm.value.appointmentDate).subscribe(data=>{
        this.doctors=data;
        console.log(data);
        console.log(this.doctors);
       this.passData(this.doctors);

       this.appointment=this.bookAppointmentForm.value;
      //  this.appointment.patient=this.patient;
       this.receptionistService.setAppointment(this.appointment);
        this.router.navigate(['/Doctorspecialitylist']);
      },(error=>{
        alert('Doctor Not Available');
       }))
    }

      // this.router.navigate[(`Doctorspecialitylist/`,doctorId`)]
     

    
    // this.appointment.patientId = this.patientId;
    // this.appointment.reason = this.form['reason'].value;
    // this.appointment.doctorspeciality = this.form['doctorspeciality'].value;
    // this.appointment.appoinmentTime = this.form['appoinmentTime'].value;
    // this.appointment.appointmentDate = this.form['appointmentDate'].value;
    // this.submitted = true;

    // this.save();
  

  passData(doctor:Doctor[]){
    this.receptionistService.setDoctors(doctor);
    }

  get form(){
    return this.bookAppointmentForm.controls;
   
  }



    



}
