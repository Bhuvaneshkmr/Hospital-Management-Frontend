import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  notFound: boolean = false;
  AdminLoginForm!: FormGroup;
  isChecked = false;

  errorMessage!:String;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService,
    private route: ActivatedRoute,
    private Adminservice: AdminserviceService) { }


  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      adminPhoneNo: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
    })

  }


  inCorrect: boolean = false;
  onSubmit() {
    if (!this.AdminLoginForm.valid) {
      alert("UserName or Password Incorrect");
      
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.Adminservice.adminLoginByPhoneNumber(this.AdminLoginForm.value.adminPhoneNo).subscribe(
          (data) => {
            if (
              data?.password == this.AdminLoginForm.value.password &&
              data?.adminPhoneNo == this.AdminLoginForm.value.adminPhoneNo)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('adminUserName', `${data?.userName}`);
               console.log(this.AdminLoginForm.value);
             
              this.cookie.set('adminId', `${data?.id}`);
              localStorage.setItem('adminId',this.cookie.get('adminId'));
              this.router.navigate(['AdmindashboardComponent']);
              this.Adminservice.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
            } else {
              this.errorMessage="Invalid UserName & Password";
              console.log("Invalid");
              this.inCorrect = true;
              
            }
          },(error) => {
            this.errorMessage="Invalid UserName & Password";
            
          }
         
        );
      }
  



  
  }
  public getError(type: string): boolean {
    var errorList = this.AdminLoginForm.controls['password']['errors'];
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



  // click event function toggle
  password() {
      this.show = !this.show;
  }

}
