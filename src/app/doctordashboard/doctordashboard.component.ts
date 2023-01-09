import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { BookAppointment } from '../BookAppointment';
import { Doctor } from '../Doctor';
import { DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent {
  doctorId!: Number;

  docId!:any;
  bookAppointment1!: BookAppointment[];

  doctor!:Doctor;

  constructor(private router:Router,private cookie:CookieService,private authService:AuthService,private activeRouter : ActivatedRoute, private Doctorservice :DoctorserviceService){
    
    this.docId =  cookie.get('doctorId');

    Doctorservice.readDoctor(this.docId).subscribe(data=>{
      this.doctor=data;
    })
  }

  ngOnInit():void{
    this.getAllAppointment();


    // this.bookAppointment1 = new BookAppointment();
    this.doctorId = this.activeRouter.snapshot.params['doctorId'];

    this.Doctorservice.readAppointment(this.doctorId)
      .subscribe(data =>{
        console.log(data)
        this.bookAppointment1 = data;
      }, err => console.log(err));



   
  }


  getAllAppointment(){
    this.Doctorservice.readAllAppointment().subscribe(data =>{
      this.bookAppointment1 = data; 
    })

}


logout(){
  this.authService.logoutDoctor();
  this.cookie.delete('doctorId');
  this.cookie.delete('doctorName');
  this.router.navigate(['Doctorlogin']);
  
  

}
}
