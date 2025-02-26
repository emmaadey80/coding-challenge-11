// Task 1: Creating a Book Class
console.log("Task 1: Creating a Book Class");

class Book { // Define the Book class
    constructor(title, author, isbn, copies) {
        this.title = title; // assign book title
        this.author = author; // assign book author
        this.isbn = isbn; // assign unique book isbn
        this.copies = copies; // assign number of copies
    
    };
    getDetails() { // Method to return product details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;

    };
    updateCopies(quantity) { // Method to update stock when a copy is borrowed or returned
        if (this.copies >= quantity) {
            this.copies += quantity; // Reduce copies by ordered quantity
        } else {
            console.log("Multiple copies available.");
        }
    };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
