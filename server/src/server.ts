import express from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.json([]);
});

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'anuncio 1' },
    { id: 2, name: 'anuncio 2' },
  ]);
});

app.listen(3333);
