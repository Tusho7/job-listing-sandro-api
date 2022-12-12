import Listing from "../models/listing.js";

export const getAllListings = async (req, res) => {
  const data = await Listing.find();
  const newData = data.map((listings) => {
    return {
      id: listings.id,
      company: listings.company,
      logo: listings.logo,
      new: listings.new,
      featured: listings.featured,
      position: listings.position,
      role: listings.role,
      level: listings.level,
      postedAt: listings.postedAt,
      contract: listings.contract,
      location: listings.location,
      languages: listings.languages,
      tools: listings.tools,
    };
  });
  return res.json(newData);
};
