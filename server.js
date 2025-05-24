import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

const port = 8081;
connectDB();

app.listen(port, () => {
   console.log("Server running at ", port);
});
