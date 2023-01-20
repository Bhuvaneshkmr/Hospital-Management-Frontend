import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Patient } from '../Patient';
import { Doctor } from '../Doctor';
import { BookAppointment, Reason } from '../BookAppointment';
import { Bill } from '../Bill';
import { Time } from '@angular/common';
import { Receptionist } from '../Receptionist';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ReceptionistserviceService {
  private baseURL = 'http://localhost:8080/receptionist/';

  constructor(private httpClient: HttpClient , private cookie:CookieService) {}

  readAllPatient(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}` + 'ReadAllPatient');
  }

  readAllDoctor(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + 'ReadAllDoctor');
  }

  readAllAppointment(): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'readAllAppointment'
    );
  }

  allBill(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this.baseURL}` + 'allBill');
  }

  createPatient(patient: Patient, receptionistId: Number): Observable<Object> {
    return this.httpClient.post<Patient>(
      `${this.baseURL}` + 'CreatePatient/' + `${receptionistId}/`,
      patient
    );
    // .pipe(
    //   catchError((err) => {
    //     console.log('error caught in service')
    //     console.error(err);
    //     console.log(err.errorMessage);

    //     //Handle the error here

    //     return throwError(err);
    //   })
    //   )
  }

  bookAppointment(
    bookAppointment: BookAppointment,
    receptionistId: Number
  ): Observable<BookAppointment> {
    return this.httpClient.post<BookAppointment>(
      `${this.baseURL}` +
        'BookAppointment/' +
        `${bookAppointment.patientId}/` +
        `${bookAppointment.reason}/` +
        `${bookAppointment.appoinmentTime}/` +
        `${bookAppointment.appointmentDate}/` +
        `${receptionistId}/`,
      bookAppointment
    );
  }

  saveAppointment(
    bookAppointment: BookAppointment,
    patientId: Number,
    receptionistId: Number
  ): Observable<BookAppointment> {
    return this.httpClient.post<BookAppointment>(
      `${this.baseURL}` +
        'saveAppoint/' +
        `${patientId}/` +
        `${receptionistId}/`,
      bookAppointment
    );
  }

  appoint(
    reason: Reason,
    speciality: String,
    appoinmentTime: Time,
    appointmentDate: Date
  ): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(
      `${this.baseURL}` +
        'appoint/' +
        `${reason}/` +
        `${speciality}/` +
        `${appoinmentTime}/` +
        `${appointmentDate}/`
    );
  }

  doctors!: Doctor[];
  bookAppointment1!: BookAppointment;

  setDoctors(doctors: Doctor[]) {
    this.doctors = doctors;
  }

  getDoctors(): Doctor[] {
    return this.doctors;
  }

  setAppointment(bookAppointment: BookAppointment) {
    this.bookAppointment1 = bookAppointment;
  }

  getAppointment(): BookAppointment {
    return this.bookAppointment1;
  }

  // handleError(error: HttpErrorResponse){
  //   return throwError(error.errorMessage );
  // }

  readPatient(patientName: String): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(
      `${this.baseURL}` + 'ReadPatient/' + `${patientName}`
    );
  }
  readPatientById(patientId: Number): Observable<Patient> {
    return this.httpClient.get<Patient>(
      `${this.baseURL}` + 'getPatientById/' + `${patientId}`
    );
  }

  readPatientApp(patientName: String): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'readByPatientApp/' + `${patientName}`
    );
  }

  generateBill(bill: Bill): Observable<Object> {
    return this.httpClient.post<Bill>(
      `${this.baseURL}` +
        'GenerateBill/' +
        `${bill.appointmentNo}/` +
        `${bill.amountStatus}/` +
        `${bill.amount}/` +
        `${bill.appointmentStatus}/`,
      bill
    );
  }

  getAppointmentById(appointmentNo: Number): Observable<BookAppointment> {
    return this.httpClient.get<BookAppointment>(
      `${this.baseURL}` + 'getAppointment/' + `${appointmentNo}`
    );
  }

  updateAppointment(
    appointmentNo: Number,
    bookAppointment: BookAppointment
  ): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}` + 'updateappointment/' + `${appointmentNo}`,
      bookAppointment
    );
  }

  updatePassword(
    receptionistId: Number,
    Newpassword:String,
    oldPassword:String
  ): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}` + 'updatePassword/' + `${receptionistId}/` +
      `${Newpassword}/` + `${oldPassword}`,
      Receptionist
    );
  }

  updateAppointmentDateAndTime(
    appointmentNo: Number,
    appoinmentTime: Time,
    appointmentDate: Date,
    bookAppointment: BookAppointment
  ): Observable<Object> {
    return this.httpClient.put<BookAppointment>(
      `${this.baseURL}` +
        'upateAppointmentDateAndTime/' +
        `${bookAppointment.appointmentNo}/` +
        `${bookAppointment.appoinmentTime}/` +
        `${bookAppointment.appointmentDate}/`,
      bookAppointment
    );
  }

  getReceptionistById(receptionistId: Number): Observable<Receptionist> {
    return this.httpClient.get<Receptionist>(
      `${this.baseURL}` + 'receptionistById/' + `${receptionistId}`
    );
  }

  receptionistLogin(receptionistUserName: String): Observable<Receptionist> {
    return this.httpClient.get<Receptionist>(
      `${this.baseURL}` + 'receptionlogin/' + `${receptionistUserName}`
    );
  }
  
  

  getSpeciality(){
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'getSpeciality'
    );
  }



  

  receptionloginByPhoneNumber(receptionistPhoneNo: Number): Observable<Receptionist> {
    return this.httpClient.get<Receptionist>(
      `${this.baseURL}` + 'receptionloginByPhoneNumber/' + `${receptionistPhoneNo}`
    );
  }

  showSideMenu = new BehaviorSubject<boolean>(false);

  public setSideMenuView(view: boolean) {
    this.showSideMenu.next(view);
  }



  appointmentsForToday(): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'appointmentsForToday'
    );
  }

  activeAppointments(): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'activeAppointments'
    );
  }


  patientCount():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'patientCount'
    );

  }

  billCount():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'billCount'
    );

  }

  activeAppointmentsCount():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'activeAppointmentsCount'
    );

  }

  totalBillPercentage():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'totalBillPercentage'
    );

  }

  totalVistForTodatCount():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'totalVistForTodatCount'
    );

  }

  doctorsCount():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'doctorsCount'
    );

  }

  allAppointmentsCount():Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'allAppointmentsCount'
    );

  }


  isloggedIn(){
    return !!this.cookie.get('receptionistId');
   }
}
