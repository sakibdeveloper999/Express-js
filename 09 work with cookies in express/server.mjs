import express from 'express';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    //res.cookie('name', 'ExpressUser',{maxAge: 360000});
    res.cookie('name', 'ExpressUser');
    res.send('Welcome to the Express.js server!');
});


app.get('/fetch', (req, res) => {
    console.log(req.cookies);
    res.send('API Called')
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});