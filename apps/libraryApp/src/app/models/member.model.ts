// src/app/models/member.model.ts

export interface Member {
    id: number;
    name: string;
    email: string;
    contactNumber: string;
    address: string;
    occupation: string;
  }
  
  // Alternatively, you can define a class instead of an interface
  // export class Member {
  //   constructor(
  //     public id: number,
  //     public name: string,
  //     public email: string,
  //     public dateOfBirth: Date,
  //     public address: string,
  //     public phoneNumber: string
  //   ) {}
  // }
  