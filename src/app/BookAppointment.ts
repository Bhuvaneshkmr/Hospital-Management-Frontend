import { Time } from "@angular/common";
import { Bill } from "./Bill";
import { Patient } from "./Patient";


export class BookAppointment{
    appointmentNo!:number;
    patientId!:Number;
	patientName!:String;
    doctorId!:Number;
    doctorName!:String;
    reason!:Reason;
    appoinmentTime!:Time;
    appointmentDate!:Date;
    appointmentStatus!:AppointmentStatus;
	patient!:Patient;
	bill!:Bill;
    name: any;
}

export enum Reason{
    FEVER="FEVER",
	STOMACH_PAIN="STOMACH_PAIN",
	HEAD_ACHE = "HEAD_ACHE",
	DIARRHEA="DIARRHEA",
	FATIGUE="FATIGUE",
	COLD="COLD",
	COUGH="COUGH",
	BRUISES="BRUISES",
	JAUNDICE="JAUNDICE",
	TYPHOID="TYPHOID",
	MALARIA="MALARIA",
	DENGUE="DENGUE",
	RUNNY_NOSE="RUNNY_NOSE", 
	SORE_THROAT="SORE_THROAT",
	EAR_PAIN="EAR_PAIN",
	HEARING_LOSS="HEARING_LOSS",
	SNORING="SNORING",
	SINUS_PRESSURE="SINUS_PRESSURE",
	NOSE_BLEEDS="NOSE_BLEEDS",
	NASAL_CONGESTION="NASAL_CONGESTION",
	OTHERS="OTHERS"

}
export enum AppointmentStatus{

    ACTIVE="ACTIVE", 
    CANCEL="CANCEL", 
    COMPLETED="COMPLETED"
}