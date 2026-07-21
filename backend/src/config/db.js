import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose, { Mongoose } from "mongoose";

export const connectDB = async () =>{
    try {
        
        const connect = await mongoose.connect(process.env.MONGO_URI);
        
        // console.log(`MongoDB connected: ${connect.connection.host}`);       
        
    } catch (error) {
        console.error(error);       
        process.exit(1);
    }
}