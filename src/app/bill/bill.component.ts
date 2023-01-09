import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../Bill';
import { ReceptionistserviceService } from '../service/receptionistservice.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  addBill!:FormGroup;

  appointmentNo!:Number;

 bill : Bill = new Bill();

 submitted = false;

 constructor(private router: Router, private activate:ActivatedRoute, private formBuilder: FormBuilder,private receptionistService :ReceptionistserviceService){

  this.addBill=this.formBuilder.group({

    appointmentNo : [,[Validators.required]],
    amount : [,[Validators.required]],
    amountStatus : [,[Validators.required]],
    appointmentStatus : [,[Validators.required]]
    

  });

  
  }
  loadData(){
   
   

    this.addBill.controls['appointmentNo'].setValue(this.appointmentNo);
  }

  ngOnInit() :void{
    this.appointmentNo = this.activate.snapshot.params['appointmentNo'];
    console.log(this.appointmentNo);
    this.loadData();

  }

  save(){
    this.receptionistService.generateBill(this.bill).subscribe(data =>
       data=this.bill )

       alert("Bill Generated Successfully");

       this.router.navigate(['/Billlist']);
 
  }

  onSubmit(){
    this.bill = new Bill();
    
    
    this.bill.appointmentNo = this.form['appointmentNo'].value;
    this.bill.amount = this.form['amount'].value;
    this.bill.amountStatus = this.form['amountStatus'].value;
    this.bill.appointmentStatus = this.form['appointmentStatus'].value;
    this.submitted = true;

    this.save();
  }

  get form(){
    return this.addBill.controls;
  }

 

  
}
