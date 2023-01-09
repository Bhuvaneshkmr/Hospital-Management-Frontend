export class Receptionist{
    receptionistId!:Number;
    receptionistUserName!:String;
    receptionistPassword!:String;
    receptionistGender!:Gender;
    receptionistPhoneNo!:Number;
    joiningDate!:Date;
}

export enum Gender{
    MALE,
    FEMALE,
    OTHERS
}