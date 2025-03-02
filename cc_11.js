// Task 1: Creating a Book Class
console.log("Task 1: Creating a Book Class");

class Book { // Define the Book class
    constructor(title, author, isbn, copies) {
        this.title = title; // assign book title
        this.author = author; // assign book author
        this.isbn = isbn; // assign unique book isbn
        this.copies = copies; // assign number of copies
    
    };
    getDetails() { // method to return product details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;

    };
    updateCopies(quantity) { // Method to update quantities
            this.copies += quantity; // updaye number of copies when book is borrowed or returned
        }
    };

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2: Creating a Borrower Class
 console.log("\nTask 2: Creating a Borrower Class");

 class Borrower {
    constructor(name, borrowerID) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];
    };
    borrowBook(book) { // Method to borrow books
        if (!this.borrowedBooks.includes(book)) { // Check to see if books is already borrowed
            this.borrowedBooks.push(book); // If not borrowed add to the borrowed books array
        } else {
            console.log(`${book} is already being borrowed`);
        };
    };
    returnBook(book) { // method to remove book
       const index = this.borrowedBooks.indexOf(book); 
        if (index !== -1) { 
            this.borrowedBooks.splice(index, 1) // removes book from borrowed books
        } else {
            console.log(`${book} is available`) // message 
        }
    }
}

// Logging test case output:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

// Task 3: Creating a Library Class
console.log("\nTask 3: Creating a Library Class");

class Library { // creating Library class with book array and borrowers array
    constructor() {
        this.books = [] // array to hold book instances
        this.borrowers = [] // array to hold borrower instances
    };
    addBook(book) { // adds a new book to library
        this.books.push(book) 
    }
    listBooks() { // logs all books details
        this.books.forEach(book => {console.log(book.getDetails()); // Log details of books
        });
    }; 
    lendBook(borrowerId, isbn) { // method to lend a book to a borrower
        const borrower = this.borrowers.find(b => b.borrowerID === borrowerID); // borrower by id
        const book = this.books.find(b => b.isbn === isbn); // book by isbn

        if (book && borrower) { 
            if (book.copies > 0) { 
                book.updateCopies(-1); // reduce the number of copies
                borrower.borrowBookbook(book); // add the book to the borrowers borrowedBook
                console.log(`Book lent to ${borrower.name}: ${book.title}`); // message when book is being borrowed
            } else {
                console.log(`${book.title} is unavailable`); // message if book is unavailable 
            }
        }
    }
        

}

// Logging test cases output:
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 4: Implementing Book Borrowing
console.log("\nTask 4: Implementing Book Borrowing");


library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
