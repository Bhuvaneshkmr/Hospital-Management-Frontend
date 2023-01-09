import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentStatus, BookAppointment } from '../BookAppointment';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-update-appointment-date-and-time',
  templateUrl: './update-appointment-date-and-time.component.html',
  styleUrls: ['./update-appointment-date-and-time.component.css']
})
export class UpdateAppointmentDateAndTimeComponent {


  appointmentNo!: number;
  bookAppointment!: BookAppointment;
  temp!: BookAppointment;

  bookForm !: FormGroup;

  appointmentTime!: Time;


  constructor(
    private Activate: ActivatedRoute,
    private router: Router,
    private receptionistservice: ReceptionistserviceService,
    private formBuilder: FormBuilder,
  ) {

    
    this.bookForm=this.formBuilder.group({
      appointmentTime:['',[Validators.required]],
      appointmentDate:['',[Validators.required]],
      appointmentStatus:['',[Validators.required]],
    
     })



    
  

}
  ngOnInit(): void {

  
    this.bookAppointment = new BookAppointment();

    this.appointmentNo = this.Activate.snapshot.params['appointmentNo'];
    this.clearForm();
    this.receptionistservice.getAppointmentById(this.appointmentNo)
      .subscribe(data =>{
        
        this.bookAppointment = data;
        this.bookForm.setValue({
          appointmentTime:this.bookAppointment.appoinmentTime,
          appointmentDate:this.bookAppointment.appointmentDate,
          appointmentStatus:this.bookAppointment.appointmentStatus
        });
     
       

       
      }, err => console.log(err)
      );
      
  }

  clearForm(){
    this.bookForm.setValue({
      appointmentTime:0,
      appointmentDate:0,
      appointmentStatus:''
    });
  }



  updateAppointment(){
    console.log(this.bookAppointment.appointmentStatus);
    this.receptionistservice.updateAppointment(this.appointmentNo, this.bookAppointment)
    .subscribe(data =>{
     console.log(data);
    
       console.log(this.bookAppointment);
       alert("Updated Successfully");
       this.router.navigate(['/Allappointment']);
       
      //data= this.bookAppointment ;

      // this.goToBookList();
    }, err => {
      alert('Appointment Not Available At this Time');
    });
  }

  onSubmit(){
      // if(this.F['appointmentTime'].value!="" && this.F['appointmentDate'].value!=""){

      this.bookAppointment.appoinmentTime=this.F['appointmentTime'].value;
      this.bookAppointment.appointmentDate=this.F['appointmentDate'].value;
      //  this.bookAppointment.appointmentStatus=this.F['appointmentStatus'].value;
      console.log('hiii');
      console.log(this.F['appointmentTime'].value);
      console.log( this.bookAppointment);
      
        // this.updateAppointment();
       console.log('1');
      // }else{
        // this.bookAppointment.appoinmentTime= this.temp.appoinmentTime
        // this.bookAppointment.appointmentDate= this.temp.appointmentDate

      this.bookAppointment.appointmentStatus=this.F['appointmentStatus'].value;
      this.updateAppointment();
      console.log('2');
      // }
   
  }

  get F(){
    return this.bookForm.controls;
  }
  // goToBookList(){
  //   this.router.navigate(['/BookList']);
  // }







































  // addBookAppointment!:FormGroup;

  // bookAppointment : BookAppointment = new BookAppointment();
 
  // submitted = false;

  // bookAppoint! : BookAppointment[];
 
  // constructor(private router: Router,private formBuilder: FormBuilder,private receptionistService :ReceptionistserviceService){
 
  //  this.addBookAppointment=this.formBuilder.group({
  //    appointmentNo : [,[Validators.required]],
  //    appointmentTime : [,[Validators.required]],
  //    appointmentDate : [,[Validators.required]],
   
 
  //  });
 
   
  //  }
 
  //  ngOnInit() :void{
 
  //  }

  //  getAllAppoint(){
  //   this.receptionistService.readAllAppointment().subscribe(data =>{
  //     this.bookAppoint = data;})
  //  }
 
  //  save(){
  //    this.receptionistService.updateAppointmentDateAndTime(this.bookAppointment.appointmentNo , this.bookAppointment.appoinmentTime , this.bookAppointment.appointmentDate , this.bookAppointment).subscribe(data =>
  //       data=this.bookAppointment )
 
  //       alert("Updated Successfully");
  
  //  }
 
  //  onSubmit(){
  //    this.bookAppointment = new BookAppointment();
  //    this.bookAppointment.appointmentNo = this.form['appointmentNo'].value;
  //    this.bookAppointment.appoinmentTime = this.form['appoinmentTime'].value;
  //    this.bookAppointment.appointmentDate = this.form['appointmentDate'].value;
  //    this.submitted = true;
 
  //    this.save();
  //  }
 
  //  get form(){
  //    return this.addBookAppointment.controls;
  //  }
 
  //  updateAppointment(appointmentNo :Number ,appoinmentTime : Time , appointmentDate:Date , bookAppointment : BookAppointment){
  //   this.receptionistService.updateAppointmentDateAndTime(appointmentNo , appoinmentTime , appointmentDate , bookAppointment).subscribe(data => {
  //     console.log(data);
  //     this.getAllAppoint();
  //   })
  // }
  
  
 

 

}

 

