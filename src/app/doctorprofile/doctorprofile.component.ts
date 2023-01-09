import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from '../Doctor';
import { DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent {

  val=false;

  DoctorId !: any;

  doctorForm!:FormGroup;

  newPassword!:String;
  oldPassword!:String;

  errorMessage!:String;

  doctor!:Doctor;
  constructor(private cookie:CookieService, private  formBuilder:FormBuilder,private Doctorservice : DoctorserviceService){


    this.doctorForm=this.formBuilder.group({
      newPassword : [,[Validators.required,Validators.minLength(8)]],
      oldPassword : [,[Validators.required,Validators.minLength(8)]],
  
    });

  }

  ngOnInit() {
    this.getDoctorById();
  }

  getDoctorById(){

    this.DoctorId=this.cookie.get('doctorId');

    this.Doctorservice.readDoctor(this.DoctorId).subscribe(data =>{
      this.doctor=data;
    })


  }

  update(password:String){

    // this.Doctorservice.updatePassword(this.DoctorId,password).subscribe(data=>{
    //   console.log(data);
    //   alert("Updated Successfully");
    // })

  }


  onSubmit(){

    this.newPassword = this.form['newPassword'].value;
    this.oldPassword = this.form['oldPassword'].value;
    


    this.Doctorservice.updatePassword(this.DoctorId,this.newPassword,this.oldPassword).subscribe(data =>{
      console.log(data);
      alert("Updated Successfully");
    },
    (error => {
      console.log("ggg");
      console.log(this.newPassword,this.oldPassword);
      alert("Old Password doesn't match");
      this.errorMessage="Already password Exist";
      
    }))

 
     
   }


  click(){

    this.val = !this.val; 

  }


  get form(){
    return this.doctorForm.controls;
  }

}
