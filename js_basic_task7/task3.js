// Створити об'єкт Library, який має:

// Масив books [] - масив, де містяться об'єкти.
// Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт 
// із цими параметрами до масиву books
// Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
// Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
// Потренуватись додавати нові книжки та викликати інші методи об'єкта Library

const Library = {
    books: [],
    addBook: function (bookName, bookAuthor, bookYear, bookId) {
        const newBook = {
            name: bookName,
            author: bookAuthor,
            year: bookYear,
            id: bookId
        };
        this.books.push(newBook);
        console.log(`Book "${bookName}" by ${bookAuthor} added successfully.`);
    },
    printBookInfo: function (bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            console.log(`Book Info - Name: ${book.name}, Author: ${book.author}, Year: ${book.year}`);
        } else {
            console.log(`Book with ID ${bookId} not found.`);
        }
    },
    printAllBooks: function () {
        console.log('List of Books:');
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Name: ${book.name}, Author: ${book.author}, Year: ${book.year}`);
        });
    }
};


Library.addBook('To Kill a Mockingbird', 'Harper Lee', 1960, 1);
Library.addBook('1984', 'George Orwell', 1949, 2);
Library.addBook('The Catcher in the Rye', 'J.D. Salinger', 1951, 3);

Library.printBookInfo(2);
Library.printAllBooks();
