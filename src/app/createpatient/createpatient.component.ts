import { Component } from '@angular/core';
import { ReceptionistserviceService } from '../service/receptionistservice.service';
import { FormBuilder, FormGroup, FormsModule, Validators , ControlContainer} from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../Patient';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent {

addPatient!:FormGroup;

 patient : Patient = new Patient();

 submitted = false;

 receptionistId!:any;

 formdata = {patientN:""}

 constructor(private router: Router,private cookie:CookieService,private formBuilder: FormBuilder,private receptionistService :ReceptionistserviceService){

  this.addPatient=this.formBuilder.group({
    patientName : [,[Validators.required]],
    patientPhoneNo : [,[Validators.required]],
    patientAddress : [,[Validators.required]],
    patientAge : [,[Validators.required]],
    patientGender : [,[Validators.required]],

  });

  
  }

  ngOnInit() :void{
    this.receptionistId=this.cookie.get("receptionistId");

  }




  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if((charCode<97||charCode>122)&&(charCode<65||charCode>90) && charCode!=32){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  OnlyNumbeAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }



  onSubmit(){
    this.patient = new Patient();
    this.patient.patientName = this.form['patientName'].value;
    this.patient.patientPhoneNo = this.form['patientPhoneNo'].value;
    this.patient.patientAddress = this.form['patientAddress'].value;
    this.patient.patientAge = this.form['patientAge'].value;
    this.patient.patientGender = this.form['patientGender'].value;
    this.submitted = true;

    this.save();

    // this.router.navigate(['/existingpatientcomponent']);
    
  }

  save(){
    this.receptionistService.createPatient(this.patient,this.receptionistId).subscribe(data =>{
      data=this.patient;
      alert("Patient Created Successfully");
      this.router.navigate(['/existingpatientcomponent']);
    }
    
        );

      

       
 
  }
  

  

  get form(){
    return this.addPatient.controls;
  }

 
 


}