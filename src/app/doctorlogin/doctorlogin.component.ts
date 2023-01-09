import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminserviceService } from '../service/adminservice.service';
import { DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent {

  notFound: boolean = false;
  DoctorLoginForm!: FormGroup;
  isChecked = false;

  errorMessage!:String;
   



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService,
    private route: ActivatedRoute,
    private doctorservice: DoctorserviceService) { }


  ngOnInit(): void {
    this.DoctorLoginForm = this.fb.group({
      doctorPhoneNumber: ['', [Validators.required]],
      doctorPassword: ['', [Validators.required, Validators.minLength(8)]],
      
    })

  }


  inCorrect: boolean = false;
  onSubmit() {
    if (!this.DoctorLoginForm.valid) {
      alert("UserName or Password Incorrect");
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.doctorservice.receptionloginByPhoneNumber(this.DoctorLoginForm.value.doctorPhoneNumber).subscribe(
          (data) => {
            if (
              data?.doctorPassword == this.DoctorLoginForm.value.doctorPassword &&
              data?.doctorPhoneNumber == this.DoctorLoginForm.value.doctorPhoneNumber)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('doctorName', `${data?.doctorName}`);
               console.log(this.DoctorLoginForm.value);
              this.cookie.set('doctorId', `${data?.doctorId}`);
              localStorage.setItem('doctorId',this.cookie.get('doctorId'));
               console.log(this.DoctorLoginForm.value);
              this.router.navigate(['Doctordashboard']);
              this.doctorservice.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
            } else {
              this.errorMessage="Invalid UserName & Password";
              this.inCorrect = true;
            }
          },
          (error) => {
            this.errorMessage="Invalid UserName & Password";
          }
        );
      }
  



  
  }
  public getError(type: string): boolean {
    var errorList = this.DoctorLoginForm.controls['password']['errors'];
    if (errorList) {
      switch (type) {
        case "minlength":
          return errorList['minlength'];
        case "required":
          return errorList['required'];
      }
    }
    return false;

  }


  show: boolean = false;



  
  password() {
      this.show = !this.show;
  }

  





}
