import { freeQuery, getAll } from "../database/db.js";

export const getAllTags = async (req, res) => {
  try {
    const tags = await getAll("tag");
    res.status(200).json(tags);
  } catch (err) {
    res.status(500);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await freeQuery(
      `SELECT user.name, user.ID FROM user_tag INNER JOIN user ON user.ID = user_tag.user_ID AND user_tag.tag_ID = ${req.query.id}`
    );
    res.status(200).json(users);
  } catch (err) {
    res.status(500);
  }
};
