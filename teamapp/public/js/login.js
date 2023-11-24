import API from './lib/auth.js';

window.handleSubmit = handleSubmit;

const form = document.querySelector('form');
console.log(form);
async function handleSubmit(event) {
    event.preventDefault();

    const user = Object.fromEntries(new FormData(form));
    
    console.log(user);

    const config = {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch('/signin', config);

    const { auth, token } = await response.json();

    if(auth) {
        API.login(token);
    } else {
        console.log('Erro no login');
    }
};