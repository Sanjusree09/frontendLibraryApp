import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,  // Mark this component as standalone
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, FormsModule],  // Import common and forms modules to the standalone component
})
export class AdminComponent {
  loginName: string = '';
  loginEmail: string = '';
  loginRole: string = '';
  isLoggingIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    if (this.isLoggingIn) return; // Prevent multiple clicks
    this.isLoggingIn = true; // Disable button

    const loginData = {
      loginName: this.loginName,
      loginEmail: this.loginEmail,
      loginRole: this.loginRole,
    };

    this.apiService.loginUser(loginData)
      .then(response => {
        console.log(response); // Handle successful login
        this.router.navigate(['/librarianPanel']); // Navigate to another page upon successful login
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
    this.router.navigate(['/adminRegister']); // Navigate to registration page
  }
}
