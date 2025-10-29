import express from 'express';

const app = express();
app.use(express());
const PORT = 3000;

// set the ejs as a view engine
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  const userName = 'Md. Sakib';
  res.render('index',{userName})
})

app.listen(PORT, console.log(`server in running on port ${PORT}`))