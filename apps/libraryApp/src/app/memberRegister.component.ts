import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MemberComponent } from './member.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { Member } from './models/member.model';


@Component({
  selector: 'app-member-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
 templateUrl: './memberRegister.component.html',
  styleUrls: ['./memberRegister.component.css'],
 
})
export class MemberRegisterComponent {
  
  onLogin(){
    this.router.navigate(['/member']);
  }

  name: string ='';
  email:string='';
  password:string='';
  contactNumber:string='';
  address:string='';
  occupation:string='';
  //members: string[] = [];
  showMembers = true;

  loginName: string='';
  loginEmail:string='';
  loginPassword:string='';
  loginContactNumber:string='';
  loginAddress:string='';
  loginOccupation:string='';

  isRegistering:boolean = false;
  isLoggingIn: boolean = false;

  registeredMember:{name:string, email:string,password:string, contactNumber:string, address:string, occupation:string} |null = null;
  memberData:{name:string, email:string, password:string,contactNumber:string, address:string,occupation:string}[]=[];
  constructor(private apiService:ApiService, private router:Router){}

register(){
  if(this.isRegistering) return;
  this.isRegistering = true;

  const memberData = {
    name: this.name,
    email: this.email,
    password: this.password,
    contactNumber:this.contactNumber,
    address:this.address,
    occupation:this.occupation
  };

  this.apiService.registerMember(memberData)
  .then(response => {
    console.log(`Registration Successful:`,response);
    this.registeredMember = memberData;
    this.name='';
    this.email='';
    this.password='';
    this.contactNumber='';
    this.address='';
    this.occupation='';

    this.memberData.push({...memberData});

  })
  .catch(error => {
    console.error(`Registration Failed:`,error);
  })
  .finally(() => {
    this.isRegistering = false;
  });
  this.router.navigate(['/member']);

  

}

login(){
  if(this.isLoggingIn) return;
  this.isLoggingIn =  true;

  if(this.registeredMember){
    if(this.loginName === this.registeredMember?.name && 
      this.loginEmail === this.registeredMember.email &&
      this.loginPassword === this.registeredMember.password ){
  
        console.log(`Login Successful: User Validated`);
      } else {
        console.error(`Login Failed: Invalid credentials`);
      }

  } else {
    console.error(`Login Failed: No registered member data found`);
  }
  this.isLoggingIn = false;

 
  
}



}
