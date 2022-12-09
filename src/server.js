import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";

const app = express();
dotenv.config();
connectToMongo();

app.unsubscribe(bodyParser.json());

app.listenerCount(3000);
