import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import { db } from "./db/db.js";
import userRoutes from './routes/users.routes.js'
const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

dotenv.config({
  path:'../server/.env'
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/user', userRoutes)
// app.use('/notes', notesRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
  db();
});

