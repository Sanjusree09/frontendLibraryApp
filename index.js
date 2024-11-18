// const express = require('express');
// const app = express();
// const port = 3600;
// //const { v4: uuidv4 } = require('uuid');
// const jetit  = require('@jetit/id');
// const cors = require('cors');
// //const Admin = require('./models/Admin.js');
// //const books = require('./models/Book.js');
// //const members = require('./models/Member.js');
// app.use(express.json());

// app.use(cors());




// let bookList = [];
// let adminRegister = [];
// let memberList = [];
// let registry = [];

// //AUTHENTICATION
// app.post('/admin/Signup', async(req, res) => {
//     const {id, name, email, role  } = req.body;
//     if (!name || !email || !role) {
//         return res.status(400).send('Signup Unsuccessful need name, email, role');
//     }
//     // try{
//     //     const id = jetit.generateID('HEX');
//     //     const [result] = await pool.query(
//     //         `INSERT INTO admin (name, email, role) VALUES (?, ?, ?, ?)`,
//     //         [name,email,role]

//     //     );
    

//     // console.log("Admin Signup UserID:",id);
//     // res.status(201).send("Signup Successful");
//     // } catch(error){
//     //     console.error(`Error inserting admin into DB`,error);
//     //     res.status(500).send('Internal server error');
//     // }
//     const signup = {id:jetit.generateID('HEX'), name, email, role };
//     adminRegister.push(signup);
//     console.log("Admin Signup UserId", signup.id);
//     res.status(201).send('Signup Successful');
// });
// app.get('/admin/getAdmin/:name', (req, res) => {
//     const name = req.params['name'];
//     const adminLogin = adminRegister.find(user => user.name === name);
//     console.log('Login:',adminLogin)
//     if (!adminLogin) {
//         return res.status(404).send('User not found');
//     }
//    res.send(adminLogin);
// });

// app.patch('/admin/updateAdminDetails/:name', (req, res) => {
//     const name = req.params['name'].trim();
//     const user = adminRegister.find(update => update.name === name);
//     console.log('User from Patch:', user);
//     if (!user) {
//         return res.status(404).send('Admin not found');
//     }

//     Object.keys(req.body).forEach(key => {
//         if (user[key] !== undefined) {
//             user[key] = req.body[key];
//         }
//     });

//     return res.status(200).send('Admin Details Updated Successfully');
// });

// app.delete('/admin/deleteadmin/:name', (req, res) => {
//     const del = req.params['name'].trim();
//     const userIndex = adminRegister.findIndex(deleteUser => deleteUser.name === del);
//     if (userIndex === -1) {
//         return res.status(404).send('Admin Details not Found');
//     }

//     adminRegister.splice(userIndex, 1);
//     return res.status(200).send('Admin deleted successfully');
// });


// app.get('/admin/Signup', (req, res) => {
//     res.send(adminRegister);
// });



// //LIST OF BOOKS
// app.post('/addBooks', (req, res) => {
//     const {id, title, author, quantity, edition } = req.body;

//     if (!title || !author || !quantity ||!edition) {
//         return res.status(400).json({ error: 'Title, Author, Quantity and Edition are required' });
//     }

    
//     const existingBook = bookList.find(b => b.title.toLowerCase() === title.toLowerCase());
//     if (existingBook) {
//         return res.status(400).json({ error: 'A book with this title already exists' });
//     }

//     const newBook = {id: jetit.generateID('HEX'), title, author, quantity, edition};

//     bookList.push(newBook);
//     console.log('Book ID',newBook.id + ' ' + 'BookTitle:' + newBook.title);
//     res.status(201).json(newBook);
// });

// app.get('/bookList/getBooks/:id', (req, res) => {
//     const id = req.params['id'];
//     const book = bookList.find(book => book.id === id);
   
//     if (!book) {
//         return res.status(404).send('Book not found');
//     }
//     res.send(book);
// });

// app.put('/bookList/updateBooks/:id', (req, res) => {
//     const id = req.params['id'];
//     console.log('Updating book with ID:', id); 

//     const { title, author, quantity, edition } = req.body;
//     const book = bookList.find(book => book.id === id);
//     if (!book) {
//          res.status(404).send('Book not found');
//     }
//     console.log('Title:', title);

//     if (title) book.title = title;
//     if (author) book.author = author;
//     if (quantity) book.quantity = quantity;
//     if (edition) book.edition = edition;

//      res.status(200).send('Book Updated Successfully');
// });

// app.patch('/bookList/updateBook/:id', (req, res) => {
//     const id = req.params['id'];
//     const book = bookList.find(book => book.id === id);
//     //console.log('Book from Patch:', user);
//     if (!book) {
//         return res.status(404).send('Book not found');
//     }

//     Object.keys(req.body).forEach(key => {
//         if (book[key] !== undefined) {
//             book[key] = req.body[key];
//         }
//     });

//     return res.status(200).send('Book Details Updated Successfully');
// });

// // app.delete('/bookList/deleteBooks/:id', (req, res) => {
// //     const id = req.params['id'].trim();
// //     const bookIndex = bookList.findIndex(book => book.bookId === id);
// //     if (bookIndex === -1) {
// //         return res.status(404).send('Book not Found');
// //     }

// //     bookList.splice(bookIndex, 1);
// //     return res.status(200).send('Book deleted successfully');
// // });




// app.get('/addBooks', (req, res) => {
//     res.send(books);
// });

// // app.get('/getAllBooks/:name', (req, res) => {
// //     const{id, title, author} = req.body;
// //     const book = bookList.find(b => b.id == id);
// //     if(!book){
// //         res.send("not found");
// //     }
// //     res.send(book);

// // })


// //*********************************PATRON DETAILS***************************************** */
// app.post('/member/Signup', (req, res) => {
//     const {id, name, email, contactNumber, address, occupation } = req.body;

//     if (!name || !email || !contactNumber ||!address ||!occupation) {
//         return res.status(400).json({ error: 'name, email, contactNumber, address and occupation are required' });
//     }

//     // Check if a book with the same title already exists (case-insensitive)
//     const existingMember = memberList.find(b => b.name.toLowerCase() === name.toLowerCase());
//     if (existingMember) {
//         return res.status(400).json({ error: 'Member already exists' });
//     }

//     const newMember = {id: jetit.generateID('HEX'), name, email, contactNumber, address, occupation};

//     memberList.push(newMember);
//     console.log('Member ID',newMember.id + ' ' + 'MemberName:' + newMember.name);
//     res.status(201).json(newMember);
// });



// app.get('/member/:id', (req, res) => {
//     const memberId = req.params['id'];
//     const member = memberList.find(user => user.id === memberId);
//     console.log('Login:',member)
//     if (!member) {
//         return res.status(404).send('Member not found');
//     }
//    res.send(member);
// });

// app.patch('/updateMemberDetails/:id', (req, res) => {
//     const memberId = req.params['id'].trim();
//     const user = memberList.find(update => update.id === memberId);
//     console.log('Patron from Patch:', user);
//     if (!user) {
//         return res.status(404).send('Member not found');
//     }

//     Object.keys(req.body).forEach(key => {
//         if (user[key] !== undefined) {
//             user[key] = req.body[key];
//         }
//     });

//     return res.status(200).send('Member Details Updated Successfully');
// });

// // app.delete('/deleteMember/:name', (req, res) => {
// //     const del = req.params['name'].trim();
// //     const userIndex = patronList.findIndex(deleteUser => deleteUser.name === del);
// //     if (userIndex === -1) {
// //         return res.status(404).send('Patron Details not Found');
// //     }

// //     patronList.splice(userIndex, 1);
// //     return res.status(200).send('Patron deleted successfully');
// // });


// app.get('/member/Signup', (req, res) => {
//     res.send(memberList);
// });




// //*********************************REGISTRY***************************************** */

// app.post('/registry/addBooks', (req, res) => {
//     const {bookId,title, memberId, memberName, borrowedDate, Return} = req.body;
//     if (!bookId || !memberId ||!memberName ) {
//         return res.status(400).send('bookId, memberId, memberName, borrowedDate are required');
//     }
//     const book = {bookId, title, memberId, memberName, borrowedDate: new Date(), Return };
//     registry.push(book);
//     console.log('Book ID (Registry)',book.bookId + ' ' + 'MemberId:' + book.memberId, + ' ' + 'ReturnBook:' + Return);
//     res.status(201).send('Book Registry is added');
// });
// app.get('/getRegistry/:bookId', (req, res) => {
//     const id = req.params['bookId'];
//     const book = registry.find(user => user.bookId === id);
//     console.log('Get Registry:',book)
//     if (!book) {
//         return res.status(404).send('Registry not found');
//     }
//    res.send(book);
// });

// app.patch('/updateRegistry/:bookId', (req, res) => {
//     const name = req.params['bookId'].trim();
//     const user = registry.find(update => update.bookId === name);
//     console.log('Book Status from Patch:', user);
//     if (!user) {
//         return res.status(404).send('Registry not found');
//     }

//     Object.keys(req.body).forEach(key => {
//         if (user[key] !== undefined) {
//             user[key] = req.body[key];
//         }
//     });

//     return res.status(200).send('Registry Updated Successfully');
// });

// app.delete('/deleteRegistry/:name', (req, res) => {
//     const del = req.params['name'].trim();
//     const userIndex = registry.findIndex(deleteUser => deleteUser.name === del);
//     if (userIndex === -1) {
//         return res.status(404).send('Registry Details not Found');
//     }

//     registry.splice(userIndex, 1);
//     return res.status(200).send('Registry deleted successfully');
// });


// app.get('/registry/addBooks', (req, res) => {
//     res.send(registry);
// });


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
const express = require('express');
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();  // Import dotenv to load .env variables
var cors = require('cors');
const jetit  = require('@jetit/id');



const app = express();
const port = 3600;

// In-memory "database" for storing users
let users = []; // This array will hold user data
let memberList =[];
let member = [];
let bookList = [];
let registryList = [];

// Load the JWT_SECRET from environment variables
const JWT_SECRET = process.env.JWT_SECRET; // Using environment variable

// Middleware to parse JSON body
app.use(express.json());
app.use(cors())

// Registration Route
app.post('/admin/Signup', async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Hash the password before saving
  //const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user (just in memory)
  const newUser = { id: jetit.generateID('HEX'), name, email, role };
  users.push(newUser); // Store user in memory

  // Generate JWT token
  const token = jwt.sign({ userId: newUser.id, name:newUser.name,email:newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '1h' });

  // Return success response with token
  res.json({
    message: 'User registered successfully',
    token
  });
});

// Login Route
app.post('/admin/login', async (req, res) => {
  const { name, email, role } = req.body;

  // Find user by email
  const user = users.find(user => user.email === email||user.name === name||user.role ===role);
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  // Compare passwords
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(400).json({ error: 'Invalid credentials' });
//   }

  // Generate JWT token after successful login
  const token = jwt.sign({ userId: user.id, name:user.name, email:user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

  // Return success response with token
  res.json({
    message: 'Login successful',
    token
  });
});







/////////////////////MEMBER///////////////////////////////////////////////////////

app.post('/member/Signup', async (req, res) => {
    const { name, email, password, contactNumber, address, occupation } = req.body;
  
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'Member already exists' });
    }
  
    // Hash the password before saving
    //const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create a new user (just in memory)
    const newUser = { id: jetit.generateID('HEX'), name, email, password, contactNumber, address, occupation };
    users.push(newUser); // Store user in memory
  
    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id, name:newUser.name,email:newUser.email, password: newUser.password, contactNumber: newUser.contactNumber, address: newUser.address, occupation: newUser.occupation }, JWT_SECRET, { expiresIn: '1h' });
  
    // Return success response with token
    res.json({
      message: 'Member registered successfully',
      token
    });
  });
  
  // Login Route
  app.post('/member/login', async (req, res) => {
    const { name, email, password } = req.body;
  
    // Find user by email
    const user = users.find(user => user.name === name||user.email === email||user.password ===password);
    if (!user) {
      return res.status(400).json({ error: 'Member not found' });
    }
  
    // Compare passwords
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     return res.status(400).json({ error: 'Invalid credentials' });
  //   }
  
    // Generate JWT token after successful login
    const token = jwt.sign({ userId: user.id, name:user.name, email:user.email, password: user.password }, JWT_SECRET, { expiresIn: '1h' });
  
    // Return success response with token
    res.json({
      message: 'Member Login successful',
      token
    });
  });

  app.get('/member/:id', (req, res) => {
        const memberId = req.params['id'];
        const member = memberList.find(user => user.id === memberId);
        console.log('Login:',member)
        if (!member) {
            return res.status(404).send('Member not found');
        }
       res.send(member);
    });
  


/////////////////////////BOOKS//////////////////////////////////////////////////////////////////////////
app.post('/addBooks', async (req, res) => {
  const { title, author, quantity, edition, description } = req.body;

  // Check if the book already exists
  const existingBook = bookList.find(book => book.title === title);
  if (existingBook) {
    return res.status(400).json({ error: 'Book already exists' });
  }

  // Generate a unique ID for the new book
  const newBook = { 
    id: jetit.generateID('HEX'), title, author, quantity, edition, description};

  // Add the new book to the in-memory list
  bookList.push(newBook);

  // Generate a JWT token for the new book (valid for 1 hour)
  const token = jwt.sign(
    { 
      bookId: newBook.id, 
      title: newBook.title, 
      author: newBook.author, 
      quantity: newBook.quantity, 
      edition: newBook.edition,
      description: newBook.description
    }, 
    JWT_SECRET, 
    { expiresIn: '1h' } // Token expires in 1 hour
  );

  // Return the success response along with the token
  res.json({
    message: 'Book registered successfully',
    bookId:newBook.id,
    token // Send the token back to the client
   
  });
  console.log('BookId:',newBook.id);
});

app.get('/getBooks/:bookId', (req, res) => {
    const id = req.params['bookId'];
    const book = bookList.find(book => book.id === id);
   
    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.send(book);
});

app.patch('/updateBook/:bookId', async (req, res) => {
  const { bookId } = req.params;
  const { title, author, quantity, edition, description } = req.body;

  // Find the book by ID
  const bookIndex = bookList.findIndex(book => book.title === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // Update the book details
  const updatedBook = { ...bookList[bookIndex], title, author, quantity, edition, description };
  
  // Save the updated book back to the list
  bookList[bookIndex] = updatedBook;

  // Generate a new JWT token for the updated book
  const token = jwt.sign(
    { 
      bookId: updatedBook.id, 
      title: updatedBook.title, 
      author: updatedBook.author, 
      quantity: updatedBook.quantity, 
      edition: updatedBook.edition,
      description: updatedBook.description
    }, 
    JWT_SECRET, 
    { expiresIn: '1h' } // Token expires in 1 hour
  );

  // Return the success response with the updated book and new token
  res.json({
    message: 'Book updated successfully',
    bookId: updatedBook.bookId,
    token // Send the new token for the updated book
  });

  console.log('Updated BookId:', updatedBook.bookId);
});


/////////////////////MMMMMMMMMMMMEMBERS////////////////////////////

app.post('/addMembers', async (req, res) => {
  const { memberName, memberEmail, memberContactNumber, memberAddress, memberOccupation } = req.body;

  // Check if the book already exists
  const existingMember = member.find(mem => mem.memberEmail === memberEmail);
  if (existingMember) {
    return res.status(400).json({ error: 'Member already exists' });
  }

  // Generate a unique ID for the new book
  const newMember = { 
    memberId: jetit.generateID('HEX'), memberName, memberEmail, memberContactNumber, memberAddress, memberOccupation};

  // Add the new book to the in-memory list
  member.push(newMember);

  // Generate a JWT token for the new book (valid for 1 hour)
  const token = jwt.sign(
    { 
      memberId: newMember.memberId, 
      memberName: newMember.memberName, 
      memberEmail: newMember.memberEmail, 
      memberContactNumber: newMember.memberContactNumber, 
      memberAddress: newMember.memberAddress,
      memberOccupation: newMember.memberOccupation
    }, 
    JWT_SECRET, 
    { expiresIn: '1h' } // Token expires in 1 hour
  );

  // Return the success response along with the token
  res.json({
    message: 'Member registered successfully',
    memberId:newMember.memberId,
    token // Send the token back to the client
   
  });
  console.log('MemberId:',newMember.memberId);
});
app.get('/getMembers/:memberId', (req, res) => {
  const id = req.params['memberId'];
  const member = member.find(mem => mem.memberId === id);
 
  if (!member) {
      return res.status(404).send('Member not found');
  }
  res.send(member);
});








///////////////////////////////////////////REGISTRY/////////////////////////////////////////////////////////////
app.post('/addRegistry', async (req, res) => {
  const { registryId, registryName, registryBook, registryBookAuthor, registryBookQuantity, registryBookEdition, registryBookBorrowedDate, registryBookReturnDate } = req.body;

  // Check if the book already exists
  const existingRegistry = registryList.find(registry => registry.registryBook === registryBook);
  if (existingRegistry) {
    return res.status(400).json({ error: 'Registry already exists' });
  }

  // Generate a unique ID for the new book
  const newRegistry = { 
    registryId: jetit.generateID('HEX'), 
    registryName,registryBook, registryBookAuthor, registryBookQuantity, registryBookEdition, registryBookBorrowedDate, registryBookReturnDate 
    
  };

  // Add the new book to the in-memory list
  registryList.push(newRegistry);

  // Generate a JWT token for the new book (valid for 1 hour)
  const token = jwt.sign(
    { 
      registryId: newRegistry.registryId, 
      registryName: newRegistry.registryName, 
      registryBook: newRegistry.registryBook, 
      registryBookAuthor: newRegistry.registryBookAuthor, 
      registryBookQuantity: newRegistry.registryBookQuantity,
      registryBookEdition:newRegistry.registryBookEdition,
      registryBookBorrowedDate:newRegistry.registryBookBorrowedDate,
      registryBookReturnDate:newRegistry.registryBookReturnDate

    }, 
    JWT_SECRET, 
    { expiresIn: '1h' } // Token expires in 1 hour
  );

  // Return the success response along with the token
  res.json({
    message: 'Registry Added to Registry successfully',
    registryId:newRegistry.registryId,
    token // Send the token back to the client
  });
});


app.get('/getRegistry/:registryBook', (req, res) => {
  const id = req.params['registryBook'];
  const registry = registryList.find(reg => reg.registryBook === id);
 
  if (!registry) {
      return res.status(404).send('Registry not found');
  }
  res.send(registry);
});







app.get('/members',(req,res)=>{
  res.json(memberList);
})








// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
