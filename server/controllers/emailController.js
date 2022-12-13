import { insert } from "../database/db.js";

export const saveEmail = async (req, res) => {
  try {
    const emailValues = [[req.body.name, req.body.email, req.body.content]];
    const newEmail = await insert("email", "name, email, content", emailValues);
    res.status(200).json("Sparat!");
  } catch (err) {
    res.status(500);
  }
};
