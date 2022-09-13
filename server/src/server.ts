import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Ad 1' },
    { id: 1, name: 'Ad 2' },
    { id: 1, name: 'Ad 3' },
    { id: 1, name: 'Ad 4' },
  ]);
});

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
