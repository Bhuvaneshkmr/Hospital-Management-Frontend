import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from './Patient';

@Pipe({
  name: 'searchpatient'
})
export class SearchpatientPipe implements PipeTransform {

  transform(Patients : Patient[],searchNameP:String): Patient[] {

    if(!Patients || !searchNameP){
      return Patients;
    }
    return Patients.filter(Patien => 
      Patien.patientName.toLocaleLowerCase().includes(searchNameP.toLocaleLowerCase()) ||
      Patien.patientAddress.toLocaleLowerCase().includes(searchNameP.toLocaleLowerCase())  ||
      Patien.patientAge.toString().includes(searchNameP.toLocaleLowerCase()) ||
      Patien.patientPhoneNo.toString().includes(searchNameP.toLocaleLowerCase()) ||
      Patien.patientAge.toString().includes(searchNameP.toLocaleLowerCase()) ||
      Patien.patientGender.toLocaleLowerCase().includes(searchNameP.toLocaleLowerCase())
      );
  }


}
