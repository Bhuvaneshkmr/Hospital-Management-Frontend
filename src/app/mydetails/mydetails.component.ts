import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Receptionist } from '../Receptionist';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent {
[x: string]: any;

  receptionistForm!:FormGroup;


  val=false;

   receptionistId !: any;



   reception!:Receptionist;

   passwordRec!:String;

  //  oldPassword!:String;

   errorMessage!:String;

   Newpassword!:String;

   oldPassword!:String;

   
  constructor(private cookie:CookieService,private formBuilder: FormBuilder, private receptionService : ReceptionistserviceService){

    this.receptionistForm=this.formBuilder.group({
      newPassword : [,[Validators.required,Validators.minLength(8)]],
      oldPassword : [,[Validators.required,Validators.minLength(8)]],
  
    });

    
  }
  

  ngOnInit() {
    this.getReceptionistById();
  }

  

  getReceptionistById(){

    this.receptionistId=this.cookie.get('receptionistId');

    

    this.receptionService.getReceptionistById(this.receptionistId).subscribe(data =>{
      this.reception=data;
    })


  }

  click(){


    this.val = !this.val; 

  }


  // update(newPassword:String,oldPassword:String){

    

    // this.receptionService.updatePassword(this.receptionistId,newPassword,oldPassword).subscribe(data=>{
    //   console.log(data);
    //   alert("Updated Successfully");
    // },
    // (error => {
    //   console.log("ggg");
    //   console.log(newPassword,oldPassword);
    //   alert("Already password Exist");
    //   this.errorMessage="Already password Exist";
      
    // }))

      

  // }

  onSubmit(){

    this.Newpassword = this.form['newPassword'].value;
    this.oldPassword = this.form['oldPassword'].value;
    


    this.receptionService.updatePassword(this.receptionistId,this.Newpassword,this.oldPassword).subscribe(data=>{
      console.log(data);
      alert("Updated Successfully");
    },
    (error => {
      console.log("ggg");
      console.log(this.Newpassword,this.oldPassword);
      alert("Old Password doesn't match");
      this.errorMessage="Already password Exist";
      
    }))

    
  }

  
  get form(){
    return this.receptionistForm.controls;
  }


 

}
