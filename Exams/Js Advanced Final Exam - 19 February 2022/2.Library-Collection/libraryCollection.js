'use strict';

class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw new Error('Not enough space in the collection.');
        }

        let book = {
            name: bookName,
            author: bookAuthor,
            payed: false
        };

        this.books.push(book);
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let currentBook = this.books.find(b => b.name === bookName);
        if (currentBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (currentBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        currentBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let bookToRemove = this.books.find(b => b.name === bookName);

        if (bookToRemove === undefined) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (bookToRemove.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let bookIndex = this.books.indexOf(bookToRemove);
        this.books.splice(bookIndex, 1);
        this.capacity++;

        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = '';

        if (bookAuthor !== undefined) {
            let booksFromAuthor = this.books.filter(b => b.author === bookAuthor)

            if (booksFromAuthor.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                

                for (const book of booksFromAuthor) {
                    result += `${book.name} == ${book.author} - ${book.payed === true ? 'Has Paid' : 'Not Paid'}.\n`;
                }
                return result.trimEnd();
            }
        } else {
            result = `The book collection has ${this.capacity} empty spots left.\n`;
            let sortedBooks = this.books.sort((a, b) => a.name.localeCompare(b.name));

            for (const book of sortedBooks) {
                result += `${book.name} == ${book.author} - ${book.payed === true ? 'Has Paid' : 'Not Paid'}.\n`;
            }
            return result.trimEnd();
        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

