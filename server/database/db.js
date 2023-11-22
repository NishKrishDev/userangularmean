import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const Connection = async() => {
    const dbUrl = process.env.DB_URL;
    try {
        await mongoose.connect(dbUrl);
        console.log('Database Conneted Successfully')
    } catch (error) {
        console.log('Error while connecting database', error)
    }
}

export default Connection;