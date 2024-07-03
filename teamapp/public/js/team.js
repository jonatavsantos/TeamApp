import API from './lib/auth.js';

const form = document.querySelector('form');
console.log(form);

function loadFormSubmit() {
  form.onsubmit = async (event) => {
    event.preventDefault();

    const Team = Object.fromEntries(new FormData(form));

    const response = await fetch('/newteam', {
      method: 'POST',
      body: JSON.stringify(Team),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API.getToken()}`,
      },
    });

    const newteam = await response.json();

    console.log(newteam);
  };
}


if (API.isAuthenticated()) {
  loadFormSubmit();
}