let myLibrary = [{ title: 'The Prestige', author: 'Christopher Priest', pages: 404, read: true }];

function Book(title, author, pages, read) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function displayBooks() {
    document.getElementById('table-data').innerHTML = myLibrary.map((book, index) => {
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

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function submitNewBook(event) {
    event.preventDefault();
    const title = event.target.elements.bookTitle.value;
    const author = event.target.elements.bookAuthor.value;
    const pages = event.target.elements.bookTitle.value;
    const read = event.target.elements.readBook.checked;
    addBookToLibrary(new Book(title, author, pages, read));
    displayBooks();
}

displayBooks();