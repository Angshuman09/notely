import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import { db } from "./db/db.js";
import userRoutes from './routes/users.routes.js';
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());
dotenv.config({
    path: '../server/.env'
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);
// app.use('/notes', notesRoutes);
app.listen(3000, () => {
    console.log("Server running on port 3000");
    db();
});
//# sourceMappingURL=index.js.map