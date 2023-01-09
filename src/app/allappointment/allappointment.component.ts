import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookAppointment } from '../BookAppointment';
import { Patient } from '../Patient';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-allappointment',
  templateUrl: './allappointment.component.html',
  styleUrls: ['./allappointment.component.css']
})
export class AllappointmentComponent {

  searchName!: any;

  bookAppointment!:BookAppointment[];

  addPatientApp!:BookAppointment[];

  patient!:  Patient;
 
  patientName!:String;

  bookAppointment1!:BookAppointment;

  appointmentNo! : number;

  // patientId !:Number;
  // doctorId!:Number;
  // appointment!:BookAppointment;
  // @Input()appointment!:BookAppointment;

  constructor(private router:Router,private activeRouter : ActivatedRoute, private receptionistService :ReceptionistserviceService){}
  
  
  ngOnInit():void{
    this.getAllAppointment();


    this.bookAppointment1 = new BookAppointment();
    this.appointmentNo = this.activeRouter.snapshot.params['appointmentNo'];

    this.receptionistService.getAppointmentById(this.appointmentNo)
      .subscribe(data =>{
        console.log(data)
        this.bookAppointment1 = data;
      }, err => console.log(err));



    // this.patientName = this.activeRouter.snapshot.params[`patientName`];
 
    // this.receptionistService.readPatientApp(this.patientName).subscribe(data=>{
    //   console.log(data);
    //   this.addPatientApp = data;
    // },
    // )
  }

  // list(){
  //   this.router.navigate(['BookList']);

  // }
   getAllAppointment(){
    this.receptionistService.readAllAppointment().subscribe(data =>{
      this.bookAppointment = data; 
      console.log(data);
    })


  }


  

  // passValue(bookAppointment:BookAppointment){
  //   this.appointment=bookAppointment;
  // }

  // getAppoint(appointmentNo: number){
  //   this.router.navigate(['BookDetail', appointmentNo]);
  // }



  updateAppoint(appointmentNo: number){
    this.router.navigate(['/UpdateAppointmentDateAndTime', appointmentNo]);
  }

  onClick(appointmentNo:Number){
    this.router.navigate(['/billComponent/'+`${appointmentNo}`]);
  }


  

}
