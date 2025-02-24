import express from 'express'
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())
dotenv.config();

// console.log(process.env.PORT);

dbConnect();

app.use('/auth', userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
})