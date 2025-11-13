import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGO_URL = 'mongodb+srv://arjunsakib43_db_user:sakib123@cluster0.5owkob5.mongodb.net/express'


    await mongoose.connect(MONGO_URL).then(() => {
        console.log("Database connected successfully");
    })
}