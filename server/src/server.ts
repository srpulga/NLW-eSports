import express from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.json([]);
});

app.get('/games/:id/ads', (request, response) => {
  return response.json([]);
});

app.get('/ads/:id/discord', (request, response) => {
  return response.json([]);
});


app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
 