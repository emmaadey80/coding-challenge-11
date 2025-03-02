// Task 1: Creating a Book Class

class Book { // creating book class
    constructor(title, author, isbn, copies) {
        this.title = title; // assign book title
        this.author = author; // assign book author
        this.isbn = isbn; // assign unique book isbn
        this.copies = copies; // assign number of copies
    
    };
    getDetails() { // method to return product details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;

    };
    updateCopies(quantity) { // method to update quantities
            this.copies += quantity; // update number of copies when book is borrowed or returned
        }
    };


// Task 2: Creating a Borrower Class
 
class Borrower {
    static allBorrowers = []
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];

        if (!Borrower.allBorrowers.some(borrower => borrower.borrowerId === this.borrowerId)) {
            Borrower.allBorrowers.push(this);
        }
    }

    borrowBook(book) { // adds book title to array
        this.borrowedBooks.push(book)
    }
    returnBook(book) { // removes books from array
        const bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex > -1) { // checks for books
            this.borrowedBooks.splice(bookIndex, 1)
        }

    }
}


// Task 3: Creating a Library Class

class Library { // creates a class library
    constructor() {
        this.books = [];
        this.borrowers = Borrower.allBorrowers;
    }

    addBook(book) { // adds book to the library
        if (book instanceof Book) {
            this.books.push(book);
        } else {
            console.log(`Please provide valid book instance.`)
        }
    }

    // Method to log all books' details
    listBooks() {
        this.books.forEach(borrower => console.log(borrower.getDetails()))
    }
    // Task 4: Implementing Book Borrowing
    lendBook(borrowerId, isbn) { 

        let bookIndex = this.books.findIndex(book => book.isbn === isbn); // identify book in array

        let borrowerIndex = this.borrowers.findIndex(borrower => borrower.borrowerId === borrowerId); // identify borrowers in array
        let borrower = this.borrowers[borrowerIndex];
              
        if (bookIndex !== -1 && this.books[bookIndex].copies > 0) { // if book is available 
            this.books[bookIndex].copies -= 1; // reduces copies by 1

            if (borrowerIndex !== -1) { // updating borrowers list
                borrower.borrowBook(this.books[bookIndex].title);
            }

        } else {
            return `Book not available.`;
        }
    }
    // Task 5: Implementing Book Returns
    returnBook(borrowerId, isbn) {
        let bookIndex = this.books.findIndex(book => book.isbn === isbn); // identify book in array using isbn
        let borrowerIndex = this.borrowers.findIndex(borrower => borrower.borrowerId === borrowerId); // identifys borrower in array using borrower ID
        let borrower = this.borrowers[borrowerIndex];
        if (bookIndex !== -1) { // checks for book
            this.books[bookIndex].copies += 1; // inc book copies
            if (borrowerIndex !== -1) { // updates borrowers borrowedBooks list
                borrower.returnBook(this.books[bookIndex].title);
            }
        } else {
            return `Book returned unsuccessfully.`;
        }
    }

}




// Test Data task 1 
console.log("Task 1: Creating a Book Class");
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Test data task 2
console.log("\nTask 2: Creating a Borrower Class");
// Logging test case output:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


// Test data task 3
console.log("\nTask 3: Creating a Library Class");
// Logging test cases output:
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Test data task 4
console.log("\nTask 4: Implementing Book Borrowing");
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Test data task 5
console.log("\nTask 5: Implementing Book Returns");
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []