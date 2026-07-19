import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

import { connectDB } from './src/config/db.js';
import interviewerRoute from './src/routes/interviewerRoutes.js';
import candidateRoute from './src/routes/candidateRoutes.js';
import scheduleRoute from './src/routes/scheduleRoutes.js';
   
const app = express();
const PORT = process.env.PORT || 7000;

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use('/api' , interviewerRoute);
app.use('/api/candidates', candidateRoute);
app.use('/api' , scheduleRoute);


app.listen(PORT, () =>{
    console.log(`Server starts on PORT : https://localhose:${PORT} `);
    
})