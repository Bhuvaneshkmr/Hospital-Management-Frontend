import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from '../Admin';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-signupadmin',
  templateUrl: './signupadmin.component.html',
  styleUrls: ['./signupadmin.component.css'],
})
export class SignupadminComponent {
  signUpAdmin!: FormGroup;

  submitted = false;

  admin: Admin = new Admin();

  constructor(
    private router: Router,
    private cookie: CookieService,
    private formBuilder: FormBuilder,
    private Adminservice: AdminserviceService
  ) {
    this.signUpAdmin = this.formBuilder.group({
      userName: [, [Validators.required]],
      adminPhoneNo: [, [Validators.required]],
      password: [,[Validators.required, Validators.minLength(8)]],
    });
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode < 97 || charCode > 122) &&
      (charCode < 65 || charCode > 90) &&
      charCode != 32
    ) {
      console.log('charCode is restricted is' + charCode);
      return false;
    }
    return true;
  }

  onSubmit() {
    this.admin = new Admin();
    this.admin.userName = this.form['userName'].value;
    this.admin.adminPhoneNo = this.form['adminPhoneNo'].value;
    this.admin.password = this.form['password'].value;
    
    

    this.submitted = true;

    this.save();

    // this.router.navigate(['/existingpatientcomponent']);
  }

  save() {
    this.Adminservice.createAdmin(this.admin).subscribe(data => {
      data = this.admin;
      alert('Admin Created Successfully');
      this.router.navigate(['/AdminloginComponent']);
    }, err => {
      alert('Something went wrong');
    });
  }

  get form() {
    return this.signUpAdmin.controls;
  }
}
