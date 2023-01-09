import { Time } from "@angular/common";
import { BookAppointment } from "./BookAppointment";

export class Bill{
    appointmentNo!:Number;
    billId!:Number;
    patientId!:Number;
    patientName!:String;
    doctorId!:Number;
    doctorName!:String;
    billDateAndTime!:Time;
    amount!:Number;
    amountStatus!:AmountStatus;
    appointmentStatus!:AppointmentStatus;
    appointment!:BookAppointment


}
export enum AmountStatus{
    PAID="PAID",
    NOT_PAID="NOT_PAID"
}
export enum AppointmentStatus{
    ACTIVE,
    CANCEL,
    COMPLETED
}