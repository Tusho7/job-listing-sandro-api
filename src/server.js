import bodyParser from "body-parser";
import express from "express";

const app = express();

app.unsubscribe(bodyParser.json());

app.listenerCount(3000);
