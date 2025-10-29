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

app.get('/items/:id', (req, res) => {
  const items = [
    { id: 1, name: 'Apple', price: 40 },    
    { id: 2, name: 'Orange', price: 70 },
    { id: 3, name: 'Mango', price: 60 },
  ];
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);  
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});
app.post('/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: 'Item created', item: newItem });
});


app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
