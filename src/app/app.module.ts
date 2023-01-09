import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReceptionistdashboardComponent } from './receptionistdashboard/receptionistdashboard.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { BillComponent } from './bill/bill.component';
import { ExistingpatientComponent } from './existingpatient/existingpatient.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatereceptionistComponent } from './createreceptionist/createreceptionist.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Receptionist } from './Receptionist';
import { AllappointmentComponent } from './allappointment/allappointment.component';
import { ReadByPatientNameComponent } from './read-by-patient-name/read-by-patient-name.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { UpdateAppointmentDateAndTimeComponent } from './update-appointment-date-and-time/update-appointment-date-and-time.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
// import { Ng2SearchPipe } from 'ng2-search-filter';
import { DatePipe } from '@angular/common';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SearchpatientPipe } from './searchpatient.pipe';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';

import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { AdmindoctorslistComponent } from './admindoctorslist/admindoctorslist.component';
import { BilllistComponent } from './billlist/billlist.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { DoctorspecialitylistComponent } from './bookappointment/doctorspecialitylist/doctorspecialitylist.component';
import { UpdateAppointmentStatusByDoctorComponent } from './update-appointment-status-by-doctor/update-appointment-status-by-doctor.component';
import { AppointmentsForTodayComponent } from './appointments-for-today/appointments-for-today.component';
import { ActiveAppointmentsComponent } from './active-appointments/active-appointments.component';
import { ReceptionistListComponent } from './receptionist-list/receptionist-list.component';
import { ListOfPatientByReceptionistComponent } from './list-of-patient-by-receptionist/list-of-patient-by-receptionist.component';
import { BilllistforadminComponent } from './billlistforadmin/billlistforadmin.component';
import { DoctorPatientListComponent } from './doctor-patient-list/doctor-patient-list.component';
import { ActiveAppointmentsByDoctorComponent } from './active-appointments-by-doctor/active-appointments-by-doctor.component';
import { SignupadminComponent } from './signupadmin/signupadmin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';




const routes: Routes = [];


@NgModule({ 
  declarations: [
    SearchfilterPipe,
    SearchpatientPipe,
    AppComponent,
    LoginComponent,
    ReceptionistdashboardComponent,
    CreatepatientComponent,
    BookappointmentComponent,
    BillComponent,
    ExistingpatientComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    CreatedoctorComponent,
    CreatereceptionistComponent,
    AllpatientComponent,
    AlldoctorsComponent,
    AllappointmentComponent,
    ReadByPatientNameComponent,
    DoctorslistComponent,
    UpdateAppointmentDateAndTimeComponent,
    DoctordashboardComponent,
    DoctorloginComponent,
    DoctorAppointmentsComponent,
    MydetailsComponent,
    AdmindoctorslistComponent,
    BilllistComponent,
    DoctorprofileComponent,
    DoctorspecialitylistComponent,
    UpdateAppointmentStatusByDoctorComponent,
    AppointmentsForTodayComponent,
    ActiveAppointmentsComponent,
    ReceptionistListComponent,
    ListOfPatientByReceptionistComponent,
    BilllistforadminComponent,
    DoctorPatientListComponent,
    ActiveAppointmentsByDoctorComponent,
    SignupadminComponent,
    AdminprofileComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DatePipe,CookieService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
