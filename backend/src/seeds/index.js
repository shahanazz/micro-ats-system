import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import Candidate from '../models/candidateModel.js';
import Interviewer from '../models/interviwerModel.js';
import { candidates } from './candidates.js';
import { interviewers } from "./interviewers.js";


await connectDB();

await Candidate.insertMany(candidates);
await Interviewer.insertMany(interviewers);

console.log("Done!");

await mongoose.disconnect();
process.exit(0);