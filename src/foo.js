const fetch = require('node-fetch');

// Unit Testing
export const foo = async function() {
  const response = await fetch('http://127.0.0.1:3000/musicians/ella', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log(response.status);
  return response.status;
};

// Integration Testing checking for SUCCESSFUL Update with valid id
export const intSuccess = async function() {
  const response = await fetch('http://127.0.0.1:3000/updateMusicians/waters', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      firstName: 'Rikesh',
      lastName: 'Kamra',
      genre: 'JAZZ',
    },
  });
  return response.status;
};

// Integration Testing checking for UNSUCCESSFUL Update with invalid id
export const intFail = async function() {
  const response = await fetch('http://127.0.0.1:3000/updateMusicians/rikki', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      firstName: 'Rikesh',
      lastName: 'Kamra',
      genre: 'ROCK',
    },
  });
  return response.status;
};
