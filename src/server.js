import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import listingRouter from "./routes/listingrouter.js";
import swaggerMiddleware from "./middlewares/swagger.middleware.js";

const app = express();
dotenv.config();
connectToMongo();

app.unsubscribe(bodyParser.json());

app.use("/api", listingRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000);
