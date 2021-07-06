function getLibrary() {
    if (localStorage.length === 0) return [];
    return JSON.parse(localStorage.getItem('myLibrary')).map(book => {
        return new Book(book.title, book.author, book.pages, book.read)
    });
}

let myLibrary = getLibrary();

function setLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.handleChange = function(value) { this.read = value; }

function clearLibrary() {
    const books = document.querySelector('.books');
    books.childNodes.forEach(child => books.removeChild(child))
}

function booksLibrary() {
    clearLibrary();

    myLibrary.forEach((item, index) => {
        const books = document.querySelector('.books');
        let book = document.createElement('div');
        book.classList.add('book')
        
        const para = (text) => {
            let p = document.createElement('p');
            p.textContent = text;
            book.appendChild(p);
        }
        
        para(item['title']);
        para(item['author']);
        para(item['pages']);

        const checklabel = document.createElement('label');
        checklabel.htmlFor = 'checked';
        checklabel.textContent = 'Read?';
        book.appendChild(checklabel)

        const bookstatus = document.createElement('input');
        bookstatus.type = 'checkbox';
        bookstatus.name = 'checked';
        bookstatus.checked = item['read'];
        bookstatus.onchange = function (e) {
            e.stopPropagation();
            item.handleChange(e.target.checked);
            setLibrary();
        };
        book.appendChild(bookstatus);

        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = 'Remove';
        remove.onclick = () => { 
            myLibrary.splice(index, 1); 
            const parent = remove.parentNode;
            books.removeChild(parent);
            setLibrary();
        }
        
        book.appendChild(remove);
        books.appendChild(book);
    })
}

booksLibrary()

newBook.addEventListener('click', (e) => {
    form.style.visibility = 'visible'
    form.querySelector('input[name="title"]').value = null;
    form.querySelector('input[name="author"]').value = null;
    form.querySelector('input[name="pages"]').value = null;
    form.querySelector('input[type="checkbox"]').checked = false;
})


function addNewBookToLibrary() {
    const title = form.querySelector('input[name="title"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = form.querySelector('input[name="pages"]').value;
    let read = form.querySelector('input[type="checkbox"]').checked;

    read.onchange = function() {
        switch (read) {
            case false:
                read = true;
                break;
            default:
                read = false;
                break;
            }
        };

    const currentBook = new Book(title, author, pages, read) 
    myLibrary.push(currentBook);

    setLibrary();
    booksLibrary();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.style.visibility = 'hidden';
    addNewBookToLibrary();
})
