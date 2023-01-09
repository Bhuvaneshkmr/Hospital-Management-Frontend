import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { BookAppointment } from './BookAppointment';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {


  transform(appointment : BookAppointment[],searchName:String): BookAppointment[] {

    if(!appointment || !searchName){
      return appointment;
    }
    return appointment.filter(appoint => 
      appoint.patientName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      appoint.doctorName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      appoint.reason.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      appoint.appointmentStatus.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) 
 
      );  
  }

}
