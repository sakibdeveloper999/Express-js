import express from 'express';

const app =express();

const PORT = 3000;

app.get('/',(req, res)=>{
   res.send('This is home page');
   console.log('This is home page');
});
app.get('/about',(req, res)=>{
   res.send('This is about page');
   console.log('This is about page');
});
app.get('/contact',(req, res)=>{
   res.send('This is contact page');
   console.log('This is contact page');
});

app.listen(PORT,()=>{
    console.log(`Server is listen on Prot ${ PORT}`);
})