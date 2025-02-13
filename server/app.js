import express from 'express'
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

const app = express()

dotenv.config();

// console.log(process.env.PORT);

dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
})