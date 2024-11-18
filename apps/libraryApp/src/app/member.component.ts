import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MemberRegisterComponent } from './memberRegister.component';
import { MemberPanelComponent } from './memberPanel.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member',
  standalone: true,
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  imports: [CommonModule, MemberRegisterComponent, MemberPanelComponent, FormsModule],
})
export class MemberComponent {
  loginName: string = '';
  loginEmail: string = '';
  loginPassword: string = '';
  isLoggingIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    if (this.isLoggingIn) return; // Prevent multiple clicks
    this.isLoggingIn = true; // Disable button

    const loginData = {
      loginName: this.loginName,
      loginEmail: this.loginEmail,
      loginPassword: this.loginPassword,
    };

    this.apiService.loginMember(loginData)
      .then(response => {
        console.log(response); // Handle successful login
        this.router.navigate(['/memberPanel']); // Navigate to another page upon successful login
      })
      .catch(error => {
        console.error(error.message); // Handle error
        alert('Login failed: Invalid credentials');
      })
      .finally(() => {
        this.isLoggingIn = false; // Enable button again
      });
  }

  onRegister() {
    this.router.navigate(['/memberRegister']); // Navigate to registration page
  }
}
