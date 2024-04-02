import express from "express";
import dotenv from "dotenv";                         // for port values defining 
import cookieParser from "cookie-parser";            //for calling middleware

import authRoutes from "./routes/auth_routes.js";    //defining used for solving the in & out problem
import messageRoutes from "./routes/message_routes.js";
import userRoutes from "./routes/user_routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 5000 ;              // If you wantwed to use any-other port

dotenv.config();

app.use(express.json());                             // to parse the requests with JSON payloads( authcontroller.js = req.body modules)
app.use(cookieParser());                             // to access cookies before doing anything below down as a middleware

app.use("/api/auth", authRoutes)                     // used for not writing login/signup and all in and out routes
app.use("/api/messages", messageRoutes) 
app.use("/api/users", userRoutes) 

// app.get('/', (req, res) => {
//     res.send("Hello, world!!!!!");                   // localhost= 5000 is the home/host page for "/" reference mentioned
// });

server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}` ) 
});