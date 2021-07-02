let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    myLibrary.forEach((e, index) => {
        const books = document.querySelector('.books');
        let book = document.createElement('div');
        book.classList.add('book')
        
        const para = (text) => {
            let p = document.createElement('p');
            p.textContent = text;
            book.appendChild(p);
        }
        
        para(e['title']);
        para(e['author']);
        para(e['pages']);
        
        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = 'Remove';
        remove.onclick = () => { 
            myLibrary.splice(index, 1); 
            const parent = remove.parentNode;
            books.removeChild(parent);
        }
        
        book.appendChild(remove);
        books.appendChild(book);
    })
}

button.addEventListener('click', () => {
    form.style.visibility = 'visible'
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    myLibrary.push(new Book(title, author, pages));
    e.target.style.visibility = 'hidden';
    addBookToLibrary()
})