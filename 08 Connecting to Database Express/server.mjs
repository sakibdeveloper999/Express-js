import express from 'express'
import { connectDB } from './config/db.mjs';

const app = express();
app.use(express());

const port = 3000;

await connectDB();


app.get('/',(req, res)=>{
   res.send('hello express')
})

app.post('/person', express.json(), (req, res)=>{
    console.log(req.body);
    res.send('Person data received');
})

app.listen(port,console.log(`Server is running on port: ${port}`));