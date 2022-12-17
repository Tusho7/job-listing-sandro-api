import express from "express";
import { getAllListings } from "../controllers/listingcontroller.js";

const listingRouter = express.Router();

listingRouter.get("/listings", getAllListings);

export default listingRouter;
