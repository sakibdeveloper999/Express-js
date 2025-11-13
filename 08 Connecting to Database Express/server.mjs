import express from 'express'

const app = express();
app.use(express());

const port = 3000;

app.get('/',(req, res)=>{
   res.send('hello express')
})

app.listen(port,console.log(`Server is running on port: ${port}`));