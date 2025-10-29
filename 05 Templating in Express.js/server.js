import express from 'express';

const app = express();
app.use(express());
const PORT = 3000;

app.get('/',(req,res)=>{
  res.send('hello from express')
})

app.listen(PORT, console.log(`server in running on port ${PORT}`))