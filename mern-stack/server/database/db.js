import mongoose from "mongoose";


import dotenv from 'dotenv'

dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD); 

const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.4zvon.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp`;
    
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error.message);
    }
};

export default Connection;
