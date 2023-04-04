import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js'; 

// env config
dotenv.config();

// rest object
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

//routes
app.get("/" , (req,res)=>{
    res.status(200).send({
        message : "Server is runnning"
    })
})

//port
const port  = process.env.PORT || 5050;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);


//listen
app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`);
})