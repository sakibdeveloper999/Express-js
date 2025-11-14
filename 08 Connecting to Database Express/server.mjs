import express from 'express'
import { connectDB } from './config/db.mjs';
import { Person } from './models/Person.mjs';
import e from 'express';

const app = express();
app.use(express());
app.use(express.json());
const port = 3000;

await connectDB();


app.get('/', (req, res) => {
    res.send('hello express')
})


// Save person data to MongoDB database 
app.post('/person', async (req, res) => {
    try {
        const { email, name, age } = req.body;
        // Here, you would typically add code to save the person data to the database.
        const newPerson = new Person({
            name,
            age,
            email
        })
        await newPerson.save();
        console.log(newPerson);
        res.send('Person Added Successfully');
    } catch (error) {
        res.send(error.message);
    }
})

//update person route

app.put('/person', async (req, res) => {
    const { id } = req.body;

    const personData = await Person.findByIdAndUpdate(id, { age: '13' })
    console.log(personData);
    res.send('Person Updated Successfully');
})


// Delete person route

app.delete('/person/:id', async (req, res) => {

    const { id } = req.params
    await Person.findByIdAndDelete(id)
    res.send('User Deleted')
    console.log('User Deleted ');
})


app.listen(port, console.log(`Server is running on port: ${port}`));