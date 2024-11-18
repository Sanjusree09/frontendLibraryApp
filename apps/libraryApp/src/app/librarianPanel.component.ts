import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';




@Component({
  selector: 'app-librarian-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './librarianPanel.component.html',
  styleUrl: './librarianPanel.component.css',
})
export class LibrarianPanelComponent  {
  bookIdToUpdate: any | null = null;
showBooks: Boolean = false;
showAddBooks:Boolean = false;
showUpdateBooks:Boolean = false;

showMembers: Boolean = false;
showAddMembers:Boolean = false;
showUpdateMembers:Boolean = false;

showRegistry: Boolean = false;
showAddRegistry:Boolean = false;
showUpdateRegistry:Boolean = false;

showSelectBook:Boolean = false;
showSelectRegister:Boolean = false;
showSelectMember:Boolean = false;




id:string='';
bookId:string = '';
title:string = '';
author:string='';
quantity:string = '';
edition:string='';
description:string='';
isAddBook:boolean = false;


registryId:string='';
registryName:string='';
registryBook:string='';
registryBookAuthor:string='';
registryBookQuantity:string='';
registryBookEdition:string='';
registryBookBorrowedDate:string='';
registryBookReturnDate:string='';

memberId:string='';
memberName:string='';
memberEmail:string='';
memberContactNumber:string='';
memberAddress:string='';
memberOccupation:string='';


books:any[]=[];
members:any[]=[];
Registry:any[]=[];

selectedMember:any = null;
showMemberDetails = false;

selectedBook: any = null;
showBookDetails = false;

selectedRegistry:any = null;
showRegistryDetails = false;



  constructor(private router: Router, private apiService: ApiService){}
 // const members = {name:'', email: '', password: '', contactNumber: '', address: '',occupation:'' } ;
 
  toggleBook(){
    this.showBooks = !this.showBooks;
    if(this.showBooks){
     this.showMembers=false;
     this.showAddMembers=false;
     this.showUpdateMembers=false;
     this.showAddBooks=false;
     this.showUpdateBooks=false;
     this.showRegistry=false;
     this.showAddRegistry=false;
     this.showUpdateRegistry=false;
    }
   // console.log(`Toggle Books:`,this.showBooks);
  }

  selectMember(memberEmail:any){
    this.apiService.getMembers(memberEmail).then(response => {
      this.selectedMember = response;
      this.showMemberDetails = true;
    }).catch(error =>{
      console.error(`Error fetching Member details`,error);
    });

  }
 
  selectBook(bookId: any) {
    this.apiService.getBooks(bookId).then(response => {
      this.selectedBook = response;  // Assuming response contains the book details
      this.showBookDetails = true;
    }).catch(error => {
      console.error('Error fetching book details:', error);
    });
    
    this.showSelectBook = !this.showSelectBook;
   
  }
 
  selectRegistry(registryName:any){
    this.apiService.getRegistry(registryName).then(response => {
      this.selectedRegistry = response;
      this.showRegistryDetails = true;
      //const generatedId = response.id;
    }).catch(error => {
      console.error(`Error fetching registry details `,error);
    });
  }
  
  member(){
    //event.preventDefault();
    this.showMembers = !this.showMembers;
    if(this.showMembers){
     this.showAddMembers=false;
     this.showUpdateMembers=false;
     this.showAddBooks=false;
     this.showBooks=false;
     this.showUpdateBooks=false;
     this.showRegistry=false;
     this.showAddRegistry=false;
     this.showUpdateRegistry=false;
    }
    
   

  }
  updateMember(){
    this.showUpdateMembers = !this.showUpdateMembers;
    if(this.showUpdateMembers){
      this.showMembers = false;
      this.showAddMembers = false;
      this.showBooks = false;
      this.showAddBooks=false;
      this.showUpdateBooks=false;
      this.showRegistry = false;
      this.showAddRegistry=false;
     this.showUpdateRegistry=false;
      

    }
  }
  registry(){
    this.showRegistry = !this.showRegistry;
   if(this.showRegistry){
    this.showMembers=false;
    this.showAddMembers=false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showAddBooks=false;
    this.showUpdateBooks=false;
    this.showAddRegistry = false;
    this.showUpdateRegistry=false;
    
   }
  }
addBooks(){
  this.showAddBooks = !this.showAddBooks;
  if(this.showAddBooks){
    this.showMembers = false;
    this.showAddMembers = false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showUpdateBooks=false;
    this.showMembers = false;
    this.showRegistry = false;
    this.showAddRegistry=false;
    this.showUpdateRegistry=false;
   
  }


}
updateBooks(){
  this.showUpdateBooks = !this.showUpdateBooks;
  if(this.showUpdateBooks){
    this.showMembers = false;
    this.showAddMembers = false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showAddBooks = false;
    this.showRegistry = false;
    this.showAddRegistry=false;
    this.showUpdateRegistry = false;
   
   
  }
  

}
addMembers(){
  this.showAddMembers = !this.showAddMembers;
  if(this.showAddMembers){
    this.showMembers = false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showAddBooks=false;
    this.showUpdateBooks=false;
    this.showRegistry = false;
    this.showAddRegistry=false;
    this.showAddBooks = false;
    this.showUpdateRegistry=false;
    
  }
}


closeBookDetails(){
  this.showBookDetails = false;
  this.selectedBook = null;
}
closeRegistryDetails(){
  this.showRegistryDetails = false;
  this.selectedRegistry = null;
}
addRegistry(){
  this.showAddRegistry = !this.showAddRegistry;
 if(this.showAddRegistry){
  this.showMembers=false;
  this.showAddMembers=false;
  this.showUpdateMembers=false;
  this.showBooks=false;
  this.showAddBooks=false;
  this.showUpdateBooks=false;
  this.showRegistry=false;
  this.showUpdateRegistry=false;
 }
}
updateRegistry(){
  this.showUpdateRegistry = !this.showUpdateRegistry;
  if(this.showUpdateRegistry){
    this.showMembers=false;
    this.showAddMembers=false;
    this.showUpdateMembers=false;
    this.showBooks=false;
    this.showAddBooks=false;
    this.showUpdateBooks=false;
    this.showRegistry=false;
    this.showAddRegistry=false;

  }
}


addBook(event:Event) {
  event.preventDefault();  // Prevent page reload when the form is submitted

  // Check if all fields are filled
  if (!this.title || !this.author || !this.quantity || !this.edition ||!this.description) {
    alert("Please fill all the fields.");
    return;
  }

  // Prepare book data to send
  const bookData = {
    title: this.title,
    author: this.author,
    quantity: this.quantity,
    edition: this.edition,
    description: this.description
  };

  // Call addBooks to save the book
  this.apiService.addBooks(bookData)
    .then(response => {
      console.log('Book Added Successfully:', response);

      // Get the generated bookId from the response
      const generatedBookId = response.bookId;

      // Push the book with the generated bookId into the books array
      this.books.push({
        id: generatedBookId,
        title: this.title,
        author: this.author,
        quantity: this.quantity,
        edition: this.edition,
        description: this.description
      });

      // Fetch the book by its ID to get complete details (if needed)
     // this.fetchBookById(generatedBookId);

      // Clear form fields
      this.title = '';
      this.author = '';
      this.quantity = '';
      this.edition = '';
      this.description = '';
    })
    .catch(error => {
      console.error('Error adding book:', error);
    });
}



// updateBook(event: Event) {
//   event.preventDefault();

//   // Prepare the updated book data
//   const updatedBookData = {
//     title: this.title,
//     author: this.author,
//     quantity: this.quantity,
//     edition: this.edition,
//     description: this.description
//   };

//   // Check if a bookIdToUpdate is provided to ensure we're updating an existing book
//   if (this.bookIdToUpdate) {
//     // Call the updateBook API to update the book on the server
//     this.apiService.updateBook(this.bookIdToUpdate, updatedBookData)
//       .then(response => {
//         console.log('Book Updated Successfully:', response);

//         // Find the index of the book in the local books array
//         const bookIndex = this.books.findIndex(book => book.id === this.bookIdToUpdate);
//         if (bookIndex !== -1) {
//           // Update the local book data with the updatedBookData
//           this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBookData };
//           console.log('Updated book locally:', this.books[bookIndex]);
//         }

//         // Reset form fields after update
//         this.resetForm();
//       })
//       .catch(error => {
//         console.error('Error updating book:', error);
//       });
//   } else {
//     console.error('No book ID provided for update.');
//   }
// }

// // Helper function to reset the form fields after update
// resetForm() {
//   // Clear all form fields
//   this.bookIdToUpdate = null;  // Reset the bookIdToUpdate to indicate we're not in update mode anymore
//   this.title = '';
//   this.author = '';
//   this.quantity = '';
//   this.edition = '';
//   this.description = '';
// }
addregistry(event:Event) {
  event.preventDefault();  // Prevent page reload when the form is submitted

  // Check if all fields are filled
  

  // Prepare book data to send
  const registryData = {
    registryId:this.registryId,
    registryName:this.registryName,
    registryBook:this.registryBook,
    registryBookAuthor: this.registryBookAuthor,
    registryBookQuantity: this.registryBookQuantity,
    registryBookEdition: this.registryBookEdition,
    registryBookBorrowedDate: this.registryBookBorrowedDate,
    registryBookReturnDate:this.registryBookReturnDate
   // description: this.description
  };

  // Call addBooks to save the book
  this.apiService.addRegistry(registryData)
    .then(response => {
      console.log('Registry Added Successfully:', response);

      // Get the generated bookId from the response
      //const generatedRegisterId = response.registerId;

      // Push the book with the generated bookId into the books array
      this.Registry.push({
        //registryId: generatedRegisterId,
        registryName: this.registryName,
        registryBook: this.registryBook,
        registryBookAuthor: this.registryBookAuthor,
        registryBookQuantity: this.registryBookQuantity,
        registryBookEdition: this.registryBookEdition,
        registryBookBorrowedDate: this.registryBookBorrowedDate,
        registryBookReturnDate:this.registryBookReturnDate
      });

      // Fetch the book by its ID to get complete details (if needed)
     // this.fetchBookById(generatedBookId);

      // Clear form fields
      this.registryId='',
        this.registryName='',
       this.registryBook='',
       this.registryBookAuthor='',
       this.registryBookQuantity='',
        this.registryBookEdition='',
       this.registryBookBorrowedDate='',
       this.registryBookReturnDate=''
    })
    .catch(error => {
      console.error('Error adding book:', error);
    });
}










addMember(event:Event){
  event.preventDefault();  // Prevent page reload when the form is submitted

  // Make sure that all fields have values
  if (!this.memberName || !this.memberEmail || !this.memberContactNumber || !this.memberAddress || !this.memberOccupation) {
    alert("Please fill all the fields.");
    return; // Optionally, show a message to the user that the fields are incomplete
  }
  // if(this.isAddBook) return;
  // this.isAddBook = true;

  const addMember = {
    //memberId:this.memberId,
    memberName: this.memberName,
    memberEmail:this.memberName,
    memberContactNumber:this.memberContactNumber,
    memberAddress:this.memberAddress,
    memberOccupation:this.memberOccupation
   
  };
  this.apiService.addMember(addMember)
  .then(response => {
    console.log(`Member Added to Registry Successfully:`,response);
    this.memberName = '';
    this.memberEmail='';
    this.memberContactNumber='';
    this.memberAddress='';
    this.memberOccupation='';
  this.members.push({...addMember});
    
  })
  .catch(error => {
    console.error(`Member added to registry failed`,error);
  })
  .finally(()=>{
    
  });
 // this.router.navigate(['/libraryPanel'])

}


}



