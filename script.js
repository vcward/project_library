class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor(bookLibrary) {
        this.bookLibrary = bookLibrary;
    }

    addBookToLibrary(book) {
        this.bookLibrary.push(book);
    }

    displayBooks() {
        document.getElementById('table-data').innerHTML = this.bookLibrary.map((book, index) => {
            return `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" onclick="toggleReadStatus(${index})">
                ${book.read ? 'Read' : 'Not Read'}
              </button></td>
              <td><button type="button" class="btn btn-danger" data-toggle="button" aria-pressed="false" onclick="removeBook(${index})">
                Delete
              </button></td>
            </tr>`
        }).join('');
    }
}

function toggleReadStatus(index) {
    myLibrary.bookLibrary[index].read = !myLibrary.bookLibrary[index].read;
    myLibrary.displayBooks();
}

function removeBook(index) {
    myLibrary.bookLibrary.splice(index, 1);
    myLibrary.displayBooks();
}

const testBook = new Book('The Prestige', 'Christopher Priest', 404, true);
const myLibrary = new Library([]);
myLibrary.addBookToLibrary(testBook);
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.elements.bookTitle.value;
    const author = e.target.elements.bookAuthor.value;
    const pages = e.target.elements.bookTitle.value;
    const read = e.target.elements.readBook.checked;
    myLibrary.addBookToLibrary(new Book(title, author, pages, read));
    myLibrary.displayBooks();
});
myLibrary.displayBooks();