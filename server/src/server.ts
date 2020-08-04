import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: 'Thaís', age:23 },
    { name: 'Marcelo', age:24 }

  ]
  return response.json(users);
});


app.listen(3333);