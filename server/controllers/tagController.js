import { freeQuery, getAll, selectFrom } from "../database/db.js";

export const getAllTags = async (req, res) => {
  try {
    const tags = await getAll("tag");
    res.status(200).json(tags);
  } catch (err) {
    res.status(500);
  }
};

export const getById = async (req, res) => {
  try {
    const tag = await selectFrom("tag", "ID", req.query.id);
    res.status(200).json(tag);
  } catch (err) {
    res.status(500);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await freeQuery(
      `SELECT user.name, user.ID, user.email FROM user_tag INNER JOIN user ON user.ID = user_tag.user_ID AND user_tag.tag_ID = ${req.query.id}`
    );
    res.status(200).json(users);
  } catch (err) {
    res.status(500);
  }
};

export const getNotConnected = async (req, res) => {
  try {
    const tags = await freeQuery(
      `SELECT ID, name FROM tag LEFT JOIN user_tag ON user_tag.tag_ID != tag.ID AND user_tag.user_ID = ${req.query.id}`
    );
    res.status(200).json(tags);
  } catch (err) {
    res.status(500);
  }
};

//SELECT name, ID FROM tag LEFT JOIN user_tag ON user_tag.user_ID <> 1
// SELECT ID, name FROM `tag` RIGHT JOIN user_tag ON user_tag.tag_ID != tag.ID AND user_tag.user_ID = 1
