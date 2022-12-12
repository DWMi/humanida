import { getAll } from "../database/db.js";

export const getAllTags = async (req, res) => {
  try {
    const tags = await getAll("tag");
    res.status(200).json(tags);
  } catch (err) {
    res.status(500);
  }
};
