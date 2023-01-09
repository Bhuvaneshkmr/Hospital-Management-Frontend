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
// import { Ng2SearchPipeModule } from 'ng2-search-filter';





const routes: Routes = [
  // {path: '',component: LoginComponent},
  //{ path: '', redirectTo: 'LoginComponent',pathMatch: 'full'},

  {path: '',component: LoginComponent},
  {path: 'LoginComponent',component: LoginComponent},
  {path: 'AdminloginComponent',component: AdminloginComponent},
  // {path: 'receptionistdashboard',component: ReceptionistdashboardComponent},
  {path: 'receptionistdashboard',component: ReceptionistdashboardComponent},
  {path: 'AdmindashboardComponent',component: AdmindashboardComponent},
  {path: 'createPatient',component:CreatepatientComponent},
  {path: 'DoctorPatientList',component: DoctorPatientListComponent},
  {path: 'Doctorprofile',component:DoctorprofileComponent},
  {path: 'Billlistforadmin',component: BilllistforadminComponent},
  {path: 'CreatedoctorComponent',component:CreatedoctorComponent},
  {path: 'CreatereceptionistComponent',component:CreatereceptionistComponent},
  {path: 'readAllPatient',component:AllpatientComponent},
  {path: 'Alldoctors',component:AlldoctorsComponent},
  {path: 'Admindoctorslist',component:AdmindoctorslistComponent},
  {path: 'Adminprofile',component:AdminprofileComponent},
  {path: 'Doctorslist',component:DoctorslistComponent},
  {path: 'Billlist',component: BilllistComponent},
  {path: 'Allappointment',component:AllappointmentComponent},
  {path: 'ListOfPatientByReceptionist',component:ListOfPatientByReceptionistComponent},
  {path: 'ActiveAppointmentsByDoctor',component:ActiveAppointmentsByDoctorComponent},
  {path: 'ReceptionistList',component: ReceptionistListComponent},
  {path: 'UpdateAppointmentStatusByDoctor',component:UpdateAppointmentStatusByDoctorComponent},
  {path: 'bookappointmentcomponent',component:BookappointmentComponent},
  {path: 'Signupadmin',component:SignupadminComponent},
  {path: 'Doctorspecialitylist',component:DoctorspecialitylistComponent},
  {path: 'bookappointmentcomponent/:PatientId',component:BookappointmentComponent},
  {path: 'ListOfPatientByReceptionist/:receptionistId',component:ListOfPatientByReceptionistComponent},
  {path: 'billComponent/:appointmentNo',component:BillComponent},
  {path: 'existingpatientcomponent',component:ExistingpatientComponent},
  {path: 'billComponent',component:BillComponent},
  {path: 'Doctordashboard',component:DoctordashboardComponent},
  {path: 'Mydetails',component:MydetailsComponent},
  {path: 'Doctorlogin',component:DoctorloginComponent},
  {path: 'DoctorAppointments',component:DoctorAppointmentsComponent},
  {path: 'AppointmentsForToday',component:AppointmentsForTodayComponent},
  {path: 'ActiveAppointments',component:ActiveAppointmentsComponent},
  {path: 'ReadByPatientName',component:ReadByPatientNameComponent},
  {path: 'UpdateAppointmentDateAndTime/:appointmentNo',component:UpdateAppointmentDateAndTimeComponent},
  {path: 'UpdateAppointmentStatusByDoctor/:appointmentNo',component:UpdateAppointmentStatusByDoctorComponent},
  {path: 'ReadPatient/:patientName',component:ReadByPatientNameComponent},
  {path: 'DoctorAppointments/:doctorId',component:DoctorAppointmentsComponent},

  
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
