import express from 'express';
import Path from 'path';


const app = express();
const PORT =  3000;
const staticPath = Path.join(import.meta.dirname,'public');

app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }));


app.get('/',(req, res)=>{
  res.send('Hello it from express server');
})

// app.get('/about',(req, res)=>{
//   console.log(req.query);
//   res.redirect('/');
// })


app.post('/about',(req, res)=>{
  console.log(req.body);
  res.redirect('/');
})


app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})