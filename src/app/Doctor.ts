export class Doctor{
    doctorId!:Number;
    doctorName!:String;
    doctorPassword!:String;
    speciality!:String;
    doctorAge!:Number;
    doctorGender!: Gender; 
    doctorQualification!:Qualification;
    availability!:Availability;
    yearOfPractice!:Number;
    doctorPhoneNumber!:BigInt;
    joiningDate!:Date;

    
}
export enum Gender{
    MALE,
    FEMALE,
    OTHERS
}
export enum Availability{
    AVAILABLE,
	NOT_AVAILABLE
}

export enum Qualification {
	MBBS='MBBS',
	MBBS_MS='MBBS_MS',
	MBBS_MD='MBBS_MD',
	BDS='BDS',
    MDS='MDS'
	
	

}

export enum Speciality {
	
	GENERAL='GENERAL',
	ENT='ENT',
	GYNECOLOGY='GYNECOLOGY',
	PEDIATRICS='PEDIATRICS',
	ORTHOPEDICS='ORTHOPEDICS',
	CARDIOLOGY='CARDIOLOGY',
    OTHERS='OTHERS'
	

}


