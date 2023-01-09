import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from '../Doctor';
import { AdminserviceService } from '../service/adminservice.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent {


  addDoctor!:FormGroup;

  doctor : Doctor = new Doctor();

 submitted = false;

 others=false;


 speci!:any;

 hospitalId!:any;

 formdata = {patientN:""}

 constructor(private router: Router,private cookie:CookieService,private formBuilder: FormBuilder,private adminservice :AdminserviceService ,private receptionistService:ReceptionistserviceService){

  this.addDoctor=this.formBuilder.group({
    doctorName : [,[Validators.required]],
    doctorPassword : [,[Validators.required, Validators.minLength(8)]],
    speciality : [,[Validators.required]],
    doctorAge : [,[Validators.required]],
    doctorGender : [,[Validators.required]],
    doctorQualification : [,[Validators.required]],
    yearOfPractice : [,[Validators.required]],
    doctorPhoneNumber:[,[Validators.required]],
    joiningDate : [,[Validators.required]],

  });

  
  }

  ngOnInit() :void{
    this.hospitalId=this.cookie.get('adminId');


    this.receptionistService.getSpeciality().subscribe(data=>{
      this.speci=data;
       console.log(this.speci);
    })

  }




  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if((charCode<97||charCode>122)&&(charCode<65||charCode>90) && charCode!=32){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  save(){
    this.adminservice.createDoctor(this.doctor,this.hospitalId).subscribe(data =>{
      data=this.doctor
      alert("Doctor Created Successfully");
      this.router.navigate(['/Admindoctorslist']);
    },(error=>{
      if(error?.status==500){
      alert('Something Went Wrong');
      }
   
     }))
       
       console.log(this.doctor);

  }

  onClick(value:string){
    if(value=="OTHERS"){
      this.others=true;
    }else{
      this.others=false;
    }
  }


  onSubmit(){

    this.adminservice.mobileNoExistforDoctor(this.form['doctorPhoneNumber'].value).subscribe(data=>{
      if(data==false){

        this.doctor = new Doctor();
        this.doctor.doctorName = this.form['doctorName'].value;
        this.doctor.doctorPassword = this.form['doctorPassword'].value;
        this.doctor.speciality = this.form['speciality'].value;
        this.doctor.doctorAge = this.form['doctorAge'].value;
        this.doctor.doctorGender = this.form['doctorGender'].value;
        this.doctor.doctorQualification = this.form['doctorQualification'].value;
        this.doctor.yearOfPractice = this.form['yearOfPractice'].value;
        this.doctor.doctorPhoneNumber = this.form['doctorPhoneNumber'].value;
        this.doctor.joiningDate = this.form['joiningDate'].value;
        this.submitted = true;
        
        this.save();

      }else{
        alert("Mobile number already exist");
      }
    })



   

    
  }

  get form(){
    return this.addDoctor.controls;
  }

 

}
