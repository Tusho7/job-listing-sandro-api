import Listing from "../models/listing.js";

export const getAllListings = async (req, res) => {
  const data = await Listing.find();
  return res.json(data);
};
