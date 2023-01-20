import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmindoctorslistComponent } from './admindoctorslist/admindoctorslist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllappointmentComponent } from './allappointment/allappointment.component';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { BillComponent } from './bill/bill.component';
import { BilllistComponent } from './billlist/billlist.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { CreatereceptionistComponent } from './createreceptionist/createreceptionist.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { DoctorspecialitylistComponent } from './bookappointment/doctorspecialitylist/doctorspecialitylist.component';
import { ExistingpatientComponent } from './existingpatient/existingpatient.component';
import { LoginComponent } from './login/login.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { ReadByPatientNameComponent } from './read-by-patient-name/read-by-patient-name.component';
import { ReceptionistdashboardComponent } from './receptionistdashboard/receptionistdashboard.component';
import { UpdateAppointmentDateAndTimeComponent } from './update-appointment-date-and-time/update-appointment-date-and-time.component';
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
import { Receptionist } from './Receptionist';
import { ReceptionistguardGuard } from './gaurd/receptionistguard.guard';
import { AdminguardGuard } from './gaurd/adminguard.guard';
import { DoctorguardGuard } from './gaurd/doctorguard.guard';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';





const routes: Routes = [
  // {path: '',component: LoginComponent},
  //{ path: '', redirectTo: 'LoginComponent',pathMatch: 'full'},

  {path: '',component: LoginComponent},

  // Admin Componenet
  {path: 'AdminloginComponent',component: AdminloginComponent},
  {path: 'AdmindashboardComponent',component: AdmindashboardComponent,canActivate:[AdminguardGuard]},
  {path: 'CreatedoctorComponent',component:CreatedoctorComponent,canActivate:[AdminguardGuard]},
  {path: 'CreatereceptionistComponent',component:CreatereceptionistComponent,canActivate:[AdminguardGuard]},
  {path: 'Admindoctorslist',component:AdmindoctorslistComponent,canActivate:[AdminguardGuard]},
  {path: 'Adminprofile',component:AdminprofileComponent,canActivate:[AdminguardGuard]},
  {path: 'Signupadmin',component:SignupadminComponent,canActivate:[AdminguardGuard]},
  {path: 'Billlistforadmin',component: BilllistforadminComponent,canActivate:[AdminguardGuard]},
  {path: 'DoctorAppointments/:doctorId',component:DoctorAppointmentsComponent,canActivate:[AdminguardGuard]},
  // receptionist Componenet
  {path: 'LoginComponent',component: LoginComponent},
  {path: 'receptionistdashboard',component: ReceptionistdashboardComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'createPatient',component:CreatepatientComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'readAllPatient',component:AllpatientComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'Alldoctors',component:AlldoctorsComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'Billlist',component: BilllistComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'Doctorslist',component:DoctorslistComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'Allappointment',component:AllappointmentComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'ListOfPatientByReceptionist',component:ListOfPatientByReceptionistComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'ReceptionistList',component: ReceptionistListComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'Doctorspecialitylist',component:DoctorspecialitylistComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'bookappointmentcomponent',component:BookappointmentComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'bookappointmentcomponent/:PatientId',component:BookappointmentComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'ListOfPatientByReceptionist/:receptionistId',component:ListOfPatientByReceptionistComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'billComponent/:appointmentNo',component:BillComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'existingpatientcomponent',component:ExistingpatientComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'billComponent',component:BillComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'Mydetails',component:MydetailsComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'AppointmentsForToday',component:AppointmentsForTodayComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'ActiveAppointments',component:ActiveAppointmentsComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'ReadByPatientName',component:ReadByPatientNameComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'UpdateAppointmentDateAndTime/:appointmentNo',component:UpdateAppointmentDateAndTimeComponent,canActivate:[ReceptionistguardGuard]},
  {path: 'ReadPatient/:patientName',component:ReadByPatientNameComponent,canActivate:[ReceptionistguardGuard]},
  // {path: 'receptionistdashboard',component: ReceptionistdashboardComponent},
  
  // Doctor Componenet
  
  {path: 'DoctorPatientList',component: DoctorPatientListComponent,canActivate:[DoctorguardGuard]},
  {path: 'Doctorprofile',component:DoctorprofileComponent,canActivate:[DoctorguardGuard]},
  {path: 'ActiveAppointmentsByDoctor',component:ActiveAppointmentsByDoctorComponent,canActivate:[DoctorguardGuard]},
  {path: 'UpdateAppointmentStatusByDoctor',component:UpdateAppointmentStatusByDoctorComponent,canActivate:[DoctorguardGuard]},
  {path: 'Doctordashboard',component:DoctordashboardComponent,canActivate:[DoctorguardGuard]},
  {path: 'Doctorlogin',component:DoctorloginComponent},
  {path: 'DoctorAppointments',component:DoctorAppointmentsComponent,canActivate:[DoctorguardGuard]},
  {path: 'UpdateAppointmentStatusByDoctor/:appointmentNo',component:UpdateAppointmentStatusByDoctorComponent,canActivate:[DoctorguardGuard]},
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
