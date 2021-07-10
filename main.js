const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const scripts = document.createElement('script');
scripts.src = './scripts.js';
body.appendChild(scripts);

// Button to add a new book

const header = document.createElement('header');
container.appendChild(header);

const newBook = document.createElement('button');
newBook.classList.add('btn');
newBook.textContent = '+ New Book';
header.appendChild(newBook);

const h1 = document.createElement('h1');
// newBook.classList.add('btn');
h1.textContent = 'Virtual Book Library';
header.appendChild(h1);

// Books container

const books = document.createElement('div');
books.classList.add('books');
container.appendChild(books);

// Form wrapper and form with children

const popup = document.createElement('div');
popup.classList.add('form-popup');

const form = document.createElement('form');
form.classList.add('form');

const label = (htmlFor, text) => {
    let label = document.createElement('label');
    label.classList.add('form-label');
    label.htmlFor = htmlFor;
    label.textContent = text;
    formItem.appendChild(label)
}

const input = (type, name, required) => {
    let input = document.createElement('input');
    input.classList.add('form-input');
    input.type = type;
    input.name = name;
    input.required = required;
    formItem.appendChild(input)
}

let formItem = document.createElement('div');
formItem.classList.add('form-item');
label('title', 'Title:');
input('text','title', true);
form.appendChild(formItem);

formItem = document.createElement('div');
formItem.classList.add('form-item');
label('author', 'Author:');
input('text', 'author', true);
form.appendChild(formItem);

formItem = document.createElement('div');
formItem.classList.add('form-item');
label('pages', 'Pages:');
input('number', 'pages', true);
form.appendChild(formItem);

formItem = document.createElement('div');
formItem.classList.add('form-item');
label('read', 'Read?');
input('checkbox', 'read', false);
form.appendChild(formItem);

const submit = document.createElement('input');
submit.classList.add('submit');
submit.type = 'submit';
submit.value = 'Add New Book';
form.appendChild(submit);
popup.appendChild(form)

container.appendChild(popup);