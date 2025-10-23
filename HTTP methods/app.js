import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get('/about', (req, res) => {
  res.send('This is about page');
});

app.get('/items', (req, res) => {
  const items = [
    { id: 1, name: 'Apple', price: 40 },
    { id: 2, name: 'Orange', price: 70 },
    { id: 3, name: 'Mango', price: 60 },
  ];
  res.json(items);
});

app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
