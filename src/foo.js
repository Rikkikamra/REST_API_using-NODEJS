const fetch = require('node-fetch');

const foo = async function() {
  const response = await fetch('http://127.0.0.1:3000/musicians/ella', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log(response.status);
  return response.status;
};

export default foo;
