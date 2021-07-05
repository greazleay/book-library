let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book.prototype = {
//     get handleChange () { return this.read },
//     set handleChange(value) {
//         this.read = value
//     }
// }

Book.prototype.handleChange = function(value) {
    this.read = value;
}

function addBookToLibrary() {
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
        };
        book.appendChild(bookstatus);

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

addBook.addEventListener('click', () => {
    form.style.visibility = 'visible'
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const read = document.querySelector('input[type="checkbox"]').checked;
    myLibrary.push(new Book(title, author, pages, read));
    e.target.style.visibility = 'hidden';
    addBookToLibrary()
})