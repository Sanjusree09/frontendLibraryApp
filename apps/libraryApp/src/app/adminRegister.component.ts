import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminRegister.component.html',
  styleUrl: './adminRegister.component.css',
})
export class AdminRegisterComponent {
  // constructor(private router: Router){
  // }
  login(){
    this.router.navigate(['/admin']);
  }

  name: string = '';
  email: string = '';
  role: string = ''; // Default to 'lib' for role
  
  // For login form
  loginName: string = '';
  loginEmail: string = '';
  loginRole: string = '';

  // For button disable state
  isRegistering: boolean = false;
  isLoggingIn: boolean = false;

  // Store user data after registration (You might want to store this in a more persistent storage)
  registeredUser: { name: string, email: string, role: string } | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  // Handle user registration
  onRegister() {
    if (this.isRegistering) return; // Prevent multiple clicks
    this.isRegistering = true; // Disable button

    const userData = {
      name: this.name,
      email: this.email,
      role: this.role
    };

    this.apiService.registerUser(userData)
      .then(response => {
        console.log('Registration successful:', response);
        // Store the user data for future login validation (this can be saved to localStorage for persistence)
        this.registeredUser = userData; 
        
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // Handle error
      })
      .finally(() => {
        this.isRegistering = false; // Enable button again
      });
      this.router.navigate(['/admin']);
  }

  // Handle user login
  onLogin() {
    if (this.isLoggingIn) return; // Prevent multiple clicks
    this.isLoggingIn = true; // Disable button

    // Validate login credentials against registered user data
    if (this.registeredUser) {
      if (this.loginName === this.registeredUser.name && 
          this.loginEmail === this.registeredUser.email && 
          this.loginRole === this.registeredUser.role) {
        
        console.log('Login successful: User validated');
        // Proceed with successful login logic (e.g., redirect to a dashboard)
        //this.router.navigate(['/admin-dashboard']);
      } else {
        console.error('Login failed: Invalid credentials');
        // Show error message (could use a toast or alert)
      }
    } else {
      console.error('Login failed: No registered user data found');
      // Handle error when no user has registered
    }

    this.isLoggingIn = false; // Enable button again
  }

}