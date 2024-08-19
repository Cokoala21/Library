const myLibrary = [];

function Book(title, author, genre, score) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.score = score;
}

Book.prototype.printBook = function() {
    return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Score: ${this.score}`;
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('book-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const score = document.getElementById('score').value;

        const newBook = new Book(title, author, genre, score);

        displayBook(newBook);

        form.reset();
    });
});

function displayBook(book) {
    const bookList = document.getElementById('book-list');

    const bookCard = document.createElement('div');
    bookCard.className = 'bookcard';

    bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <h3>Author: ${book.author}</h3>
        <h3>Genre: ${book.genre}</h3>
        <h3>Score: ${book.score}</h3>`;

    bookList.appendChild(bookCard);
}
