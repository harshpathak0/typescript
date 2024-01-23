import express from "express";
import bodyParser from 'body-parser';
import { config } from "dotenv";
import {connectDB} from "./Config/database"

config({path: "./Config/config.env"});
const port = process.env.DB_PORT || 8080;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));

import userRoute from "./Routes/userRoute"
app.use("/", userRoute);

connectDB();
app.listen(port, (): void=> {
    console.log(`server is running on port ${port}`);
})