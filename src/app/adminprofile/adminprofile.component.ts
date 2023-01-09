import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from '../Admin';
import { BookAppointment } from '../BookAppointment';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {

  adminId!:any;

  admin!:Admin;

  val=false;

  errorMessage!:String;

  adminForm!:FormGroup;

  newPassword!:String;
  oldPassword!:String;

  constructor(private cookie:CookieService, private  formBuilder:FormBuilder,private Adminservice : AdminserviceService){
    
    this.adminForm=this.formBuilder.group({
      newPassword : [,[Validators.required,Validators.minLength(8)]],
      oldPassword : [,[Validators.required,Validators.minLength(8)]],
  
    });
  }


  ngOnInit() {
    this.getAdminById();
  }

  getAdminById(){

    this.adminId=this.cookie.get('adminId');

    this.Adminservice.readAdminById(this.adminId).subscribe(data =>{
      this.admin=data;
      console.log(this.admin);
    })


  }

  onSubmit(){

    this.newPassword = this.form['newPassword'].value;
    this.oldPassword = this.form['oldPassword'].value;
    


    this.Adminservice.updatePassword(this.adminId,this.newPassword,this.oldPassword).subscribe(data =>{
      console.log(data);
      alert("Updated Successfully");
    },
    (error => {
      console.log("ggg");
      console.log(this.oldPassword,this.newPassword);
      alert("Old Password doesn't match");
      this.errorMessage="Already password Exist";
      
    }))

 
     
   }


  click(){

    this.val = !this.val; 

  }


  get form(){
    return this.adminForm.controls;
  }

}
