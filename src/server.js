import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import listingRouter from "./routes/listingrouter.js";
import swaggerMiddleware from "./middlewares/swagger.middleware.js";

const app = express();

dotenv.config();
connectToMongo();
app.use(cors());
app.unsubscribe(bodyParser.json());

app.use("/api", listingRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000);
