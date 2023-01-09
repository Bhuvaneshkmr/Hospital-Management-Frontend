import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { ReceptionistserviceService } from '../service/receptionistservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   showPasswordOnPress!: boolean;
 
  notFound: boolean = false;
  receptionLoginForm!: FormGroup;
  isChecked = false;

  errorMessage!:String;


  x!:any;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService,
    private ActivatedRouter: ActivatedRoute,
    private authService: AuthService,
    private Receptionistservice: ReceptionistserviceService) { }


  ngOnInit(): void {
    this.receptionLoginForm = this.fb.group({
      receptionistPhoneNo: ['', [Validators.required]],
      receptionistPassword: ['', [Validators.required, Validators.minLength(8)]],
      
    })

  }


  inCorrect: boolean = false;
  onSubmit() {
    if (!this.receptionLoginForm.valid) {
      alert("UserName or Password Incorrect");
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.Receptionistservice.receptionloginByPhoneNumber(this.receptionLoginForm.value.receptionistPhoneNo).subscribe(
          (data) => {
            if (
              data?.receptionistPassword == this.receptionLoginForm.value.receptionistPassword &&
              data?.receptionistPhoneNo == this.receptionLoginForm.value.receptionistPhoneNo)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('receptionistUserName', `${data?.receptionistUserName}`);
               console.log(this.receptionLoginForm.value);
             
              this.cookie.set('receptionistId', `${data?.receptionistId}`);
              localStorage.setItem('receptionistId',this.cookie.get('receptionistId'));
              this.router.navigate(['receptionistdashboard']);
              this.Receptionistservice.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
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
    var errorList = this.receptionLoginForm.controls['password']['errors'];
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

  myFunction() {
     this.x = document.getElementById("myInput");
    if (this.x.value === "password") {
      this.x.value = "text";
    } else {
      this.x.value = "password";
    }
  }

  show: boolean = false;



// click event function toggle
password() {
    this.show = !this.show;
}

  
}