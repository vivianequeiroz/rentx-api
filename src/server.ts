import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json('Henlo world!');
});

app.listen(3333, () => console.log('Server is running :3'));
