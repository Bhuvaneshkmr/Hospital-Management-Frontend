import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookAppointment } from '../BookAppointment';
import { Doctor } from '../Doctor';
import { Patient } from '../Patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private baseURL = 'http://localhost:8080/doctor/';

  constructor(private httpClient: HttpClient,private cookie:CookieService) {}

  doctorLogin(doctorName: String): Observable<Doctor> {
    return this.httpClient.get<Doctor>(
      `${this.baseURL}` + 'doctorlogin/' + `${doctorName}`
    );
  }

  receptionloginByPhoneNumber(doctorPhoneNumber: Number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(
      `${this.baseURL}` + 'receptionloginByPhoneNumber/' + `${doctorPhoneNumber}`
    );
  }

  

  showSideMenu = new BehaviorSubject<boolean>(false);

  public setSideMenuView(view: boolean) {
    this.showSideMenu.next(view);
  }


  readAppointment(doctorId: Number): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'doctorAppointment/' + `${doctorId}`
    );
  }

  readAllAppointment(): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'allAppointment'
    );
  }

  readDoctor(doctorId: Number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(
      `${this.baseURL}` + 'readdoctorbyid/' + `${doctorId}`
    );
  }

  updateAppointmentByDoctor(
    appointmentNo: Number,
    bookAppointment: BookAppointment
  ): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}` + 'updateappointmentByDoctor/' + `${appointmentNo}`,
      bookAppointment
    );
  }

  updatePassword(
    doctorId: Number,
    Newpassword:String,
    oldPassword:String
  ): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}` + 'updatePassword/' + `${doctorId}/` +
      `${Newpassword}/` + `${oldPassword}`,
      Doctor
    );
  }

  listOfPatientByDoctor(doctorId: Number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(
      `${this.baseURL}` + 'listOfPatientByDoctor/' + `${doctorId}`
    );
  }


  activeAppointmentsByDoctor(doctorId: Number): Observable<BookAppointment[]> {
    return this.httpClient.get<BookAppointment[]>(
      `${this.baseURL}` + 'activeAppointmentsByDoctor/' + `${doctorId}`
    );
  }


  isloggedIn(){
    return !!this.cookie.get('doctorId');
   }

}
