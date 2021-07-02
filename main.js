const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const scripts = document.createElement('script');
scripts.src = './scripts.js';
body.appendChild(scripts);

const form = document.createElement('form');
form.classList.add('form');

const label = (htmlFor, text) => {
    let label = document.createElement('label');
    label.classList.add('form-label');
    label.htmlFor = htmlFor;
    label.textContent = text;
    div.appendChild(label)
}

const input = (type, name) => {
    let input = document.createElement('input');
    input.classList.add('form-input');
    input.type = type;
    input.name = name;
    input.required = true;
    div.appendChild(input)
}

let div = document.createElement('div');
div.classList.add('form-item');
form.appendChild(div)

label('title', 'Title:');
input('text','title');

div = document.createElement('div');
div.classList.add('form-item');
form.appendChild(div);

label('author', 'Author:');
input('text', 'author');

div = document.createElement('div');
div.classList.add('form-item');
form.appendChild(div);

label('pages', 'Pages:');
input('text', 'pages');

div = document.createElement('div');
div.classList.add('form-item');
form.appendChild(div);

const submit = document.createElement('input');
submit.classList.add('submit');
submit.type = 'submit';
submit.value = 'Submit';
div.appendChild(submit);

div = document.createElement('div');
div.classList.add('books');
container.appendChild(div);

const button = document.createElement('button');
button.classList.add('btn');
button.textContent = 'New Book';
container.appendChild(button);

container.appendChild(form)