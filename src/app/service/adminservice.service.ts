import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../Admin';
import { Bill } from '../Bill';
import { Doctor } from '../Doctor';
import { Patient } from '../Patient';
import { Receptionist } from '../Receptionist';

@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  private baseURL = 'http://localhost:8080/Hospital/';

  constructor(private httpClient: HttpClient) {}

  createReceptionist(
    receptionist: Receptionist,
    id: Number
  ): Observable<Object> {
    return this.httpClient.post<Receptionist>(
      `${this.baseURL}` + 'CreateReceptionist/' + `${id}/`,
      receptionist
    );
  }

  createDoctor(doctor: Doctor, hospitalId: Number): Observable<Object> {
    return this.httpClient.post<Doctor>(
      `${this.baseURL}` +
        'CreateDoctor/' +
        `${doctor.doctorName}/` +
        `${doctor.doctorPassword}/` +
        `${doctor.speciality}/` +
        `${doctor.doctorAge}/` +
        `${doctor.doctorGender}/` +
        `${doctor.doctorPhoneNumber}/` +
        `${doctor.doctorQualification}/` +
        `${doctor.yearOfPractice}/` +
        `${doctor.joiningDate}/` +
        `${hospitalId}/`,
      doctor
    );
  }

  createAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post<Admin>(
      `${this.baseURL}` + 'createAdmin',

      admin
    );
  }

  adminLogin(userName: String): Observable<Admin> {
    return this.httpClient.get<Admin>(
      `${this.baseURL}` + 'adminLogin/' + `${userName}`
    );
  }
  adminLoginByPhoneNumber(adminPhoneNo: Number): Observable<Admin> {
    return this.httpClient.get<Admin>(
      `${this.baseURL}` + 'adminLoginByPhoneNumber/' + `${adminPhoneNo}`
    );
  }
  

  showSideMenu = new BehaviorSubject<boolean>(false);

  public setSideMenuView(view: boolean) {
    this.showSideMenu.next(view);
  }

  deleteDoctor(doctorId: Number): Observable<Doctor> {
    return this.httpClient.delete<Doctor>(
      `${this.baseURL}` + 'DeleteDoctor/' + `${doctorId}`
    );
  }

  readAdminById(adminId: Number): Observable<Admin> {
    return this.httpClient.get<Admin>(
      `${this.baseURL}` + 'adminById/' + `${adminId}`
    );
  }

  allReceptionist(): Observable<Receptionist[]> {
    return this.httpClient.get<Receptionist[]>(
      `${this.baseURL}` + 'readReceptionist'
    );
  }

  listOfPatientByReceptionist(receptionistId: Number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(
      `${this.baseURL}` + 'listOfPatientByReceptionist/' + `${receptionistId}`
    );
  }

  receptionistCount(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}` + 'receptionistCount');
  }

  totalBillPercentageForAdmin(): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'totalBillPercentageForAdmin'
    );
  }

  totalBill(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this.baseURL}` + 'totalBill');
  }


  updatePassword(
    adminId: Number,
    Newpassword:String,
    oldPassword:String
  ): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}` + 'updatePassword/' + `${adminId}/` +
      `${Newpassword}/` + `${oldPassword}`,
      Admin
    );
  }

  mobileNoExist(receptionistPhoneNo: Number) {
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'mobileNoExist/' + `${receptionistPhoneNo}`
    );
  }

  

  mobileNoExistforDoctor(doctorPhoneNo: Number) {
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'mobileNoExistforDoctor/' + `${doctorPhoneNo}`
    );
  }
}
