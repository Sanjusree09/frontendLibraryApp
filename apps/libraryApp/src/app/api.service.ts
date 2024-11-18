// api.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // setToken(token: any) {
  //   throw new Error('Method not implemented.');
  // }
  

  private apiUrl = 'http://localhost:3600'; // Adjust with your backend URL

  constructor() { }

  // Method for user registration
  registerUser(userData: { name: string; email: string; role: string; }) {
    console.log(`UserData:`,userData);
    localStorage.setItem('registeredUser',JSON.stringify(userData));
    return axios.post(`${this.apiUrl}/admin/Signup`, userData)
      .then(response => response.data)
      .catch(error => {
        throw error; // Propagate the error to be handled in the component
      });
  }

  // Method for user login
  loginUser(credentials: {loginEmail: string }) {
    console.log(`LoginData:`,credentials);
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    
    if(registeredUser.email === credentials.loginEmail){
      console.log(`login Successful: User Validated`);
      return Promise.resolve({message:`Login Successful`});
    } else  {
      console.error('Login failed: Invalid credentials');
      return Promise.reject(new Error('Invalid credentials'));
    }
  
    // return axios.post(`${this.apiUrl}/admin/Login`, credentials)
    //   .then(response => response.data)
    //   .catch(error => {
    //     throw error; // Propagate the error to be handled in the component
    //   });
  }


   ////////////Member Registration and login//////////////
  registerMember(memberData: { name: string; email: string; password: string; contactNumber: string; address:string; occupation:string }) {
    console.log(`UserData:`,memberData);
    localStorage.setItem('registeredMember',JSON.stringify(memberData));
    return axios.post(`${this.apiUrl}/member/Signup`, memberData)
      .then(response => response.data)
      .catch(error => {
        throw error; // Propagate the error to be handled in the component
      });
  }
  loginMember(credentials: {loginName:string, loginEmail: string, loginPassword: string }) {
    console.log(`LoginData:`,credentials);
    const registeredMember = JSON.parse(localStorage.getItem('registeredMember') || '{}');
    
    if(registeredMember.name === credentials.loginName && registeredMember.email === credentials.loginEmail && registeredMember.password === credentials.loginPassword){
      console.log(`login Successful: User Validated`);
      return Promise.resolve({message:`Login Successful`});
    } else  {
      console.error('Login failed: Invalid credentials');
      return Promise.reject(new Error('Invalid credentials'));
    }
  
    
  }


  //////////////////////////Add books///////////////////////////////////////////////

  addBooks(bookData: {title:string; author:string; quantity:string, edition:string }){
    console.log(`Book Data:`,bookData);
    localStorage.setItem('addBooks', JSON.stringify(bookData));
    return axios.post(`${this.apiUrl}/addBooks`,bookData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

  }
  getBooks(id:string){
   // const getBook = JSON.parse(localStorage.getItem('getBooks') || '{}');
    return axios.get(`${this.apiUrl}/getBooks/${id}`)
    .then(response => response.data)
    
  }
 

  updateBook(selectedBookId: string, bookData: { title: string; author: string; quantity: string; edition: string }) {
    console.log(`Updating Book ID: ${selectedBookId} with Data:`, bookData);
    
    // Optionally, store the book data in localStorage (if needed)
    localStorage.setItem('updateBook', JSON.stringify(bookData));
    
    // Send the PATCH request to update the book by ID
    return axios.patch(`${this.apiUrl}/updateBook/${selectedBookId}`, bookData)
      .then(response => {
        console.log('Response from API:', response.data);  // Log the response data
        return response.data;  // Return updated book data from the API response
      })
      .catch(error => {
        console.error('Error updating book:', error);
        throw error;  // Re-throw the error to be handled in the component
      });
  }
  addMember(memberData:{memberName:string; memberEmail:string; memberContactNumber:string; memberAddress:string; memberOccupation:string})
  {
    localStorage.setItem('addMembers', JSON.stringify(memberData));
    return axios.post(`${this.apiUrl}/addMembers`,memberData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
  }
  getMembers(memberId:string){
    // const getBook = JSON.parse(localStorage.getItem('getBooks') || '{}');
     return axios.get(`${this.apiUrl}/getMembers/${memberId}`)
     .then(response => response.data)
     
   }
  addRegistry(registryData: {registryName:string, registryBook:string, registryBookAuthor:string , registryBookQuantity:string, registryBookBorrowedDate:string, registryBookReturnDate:string}){
    console.log(`Registry Data:`,registryData);
    localStorage.setItem('addRegistry', JSON.stringify(registryData));
    return axios.post(`${this.apiUrl}/addRegistry`,registryData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

  }
  getRegistry(registryBook:string){
   // const getBook = JSON.parse(localStorage.getItem('getBooks') || '{}');
    return axios.get(`${this.apiUrl}/getRegistry/${registryBook}`)
    .then(response => response.data)
    
  }
 
  
  
}
