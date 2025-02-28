import express from 'express'
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express()

app.use(cors({
  credentials: true,
  origin: "http://localhost:5173",
}))
app.use(cookieParser())
app.use(express.json())
dotenv.config();

// console.log(process.env.PORT);

dbConnect();

app.use('/auth', userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
})