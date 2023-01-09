import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Receptionist } from '../Receptionist';
import { AdminserviceService } from '../service/adminservice.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-createreceptionist',
  templateUrl: './createreceptionist.component.html',
  styleUrls: ['./createreceptionist.component.css']
})
export class CreatereceptionistComponent {

  addReceptionist!:FormGroup;

  receptionist !: any;

  id!:any;

  submitted = false;

 constructor(private router: Router,private cookie:CookieService,private formBuilder: FormBuilder,private adminserviceService :AdminserviceService){

  this.addReceptionist=this.formBuilder.group({
    receptionistUserName : [,[Validators.required]],
    receptionistPassword : [,[Validators.required, Validators.minLength(8)]],
    receptionistGender : [,[Validators.required]],
    receptionistPhoneNo : [,[Validators.required]],
    joiningDate : [,[Validators.required]],

  });

  
  }

  ngOnInit() :void{
    this.id=this.cookie.get('adminId');


  }

  save(){
    this.adminserviceService.createReceptionist(this.receptionist,this.id).subscribe(data =>{
      this.receptionist=data
      alert("Receptionist Created Successfully");
      this.router.navigate(['/ReceptionistList']);
    },(error=>{
      if(error?.status==500){
      alert('Something Went Wrong');
  }}));
      

      
 
  }

  onSubmit(){

    this.adminserviceService.mobileNoExist(this.form['receptionistPhoneNo'].value).subscribe(data=>{
      if(data==false){

        this.receptionist = new Receptionist();
    this.receptionist.receptionistUserName = this.form['receptionistUserName'].value;
    this.receptionist.receptionistPassword = this.form['receptionistPassword'].value;
    this.receptionist.receptionistGender = this.form['receptionistGender'].value;
    this.receptionist.receptionistPhoneNo = this.form['receptionistPhoneNo'].value;
    this.receptionist.joiningDate = this.form['joiningDate'].value;
    this.submitted = true;

    this.save();
      }else{
        alert('Mobile number already exist');
      }
    })
    

    
  }

  get form(){
    return this.addReceptionist.controls;
  }


}
