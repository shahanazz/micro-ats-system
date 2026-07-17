import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { connectDB } from './src/config/db.js';

const app = express();
const PORT = process.env.PORT || 7000;

connectDB();

app.use(express.json());


app.get('/' , (req,res) =>{
    res.send('Hello warrior, you will get this job for sure!!');
})



app.listen(PORT, () =>{
    console.log(`Server starts on PORT : https://localhose:${PORT} `);
    
})