import { BookAppointment } from "./BookAppointment";

export class Patient{
        public patientId!: Number;
        public patientName!: String;
        public patientPhoneNo!: Number;
        public patientAddress!: String;
        public patientAge!: Number;
        public patientGender!: Gender; 
        static patientId: any;
        BookAppointment!:BookAppointment[];
invalid: any;

    
}
export enum Gender{
      MALE='MALE',
      FEMALE='FEMALE',
      OTHERS='OTHERS'
}