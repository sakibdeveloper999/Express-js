import express from 'express'

const app = express();
const PORT = 3000;

// Define a simple route 

app.get('/',(req,res)=>{
    res.send('HELLO EXPRESS JS');
})

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`);
})