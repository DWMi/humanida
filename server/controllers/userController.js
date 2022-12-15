import { freeQuery, insert, selectFrom } from "../database/db.js";

export const userDBValues = "name, email, description, password";

export const registerUser = async (req, res) => {
  try {
    let newUser = [
      [req.body.name, req.body.email, req.body.description, req.body.password],
    ];

    const insertedUser = insert("user", userDBValues, newUser);

    res.status(200).json(insertedUser);
  } catch (err) {
    res.send(500);
  }
};

export const logInUser = async (req, res) => {
  try {
    let response = await selectFrom("user", "email", req.body.email);

    if (response.length === 1) {
      // Matching password, setting loggedInUser to session.
      if (
        !req.session.loggedInUser &&
        req.body.password === response[0].password
      ) {
        req.session.loggedInUser = {
          ID: response[0].ID,
          name: response[0].name,
          email: response[0].email,
          description: response[0].description,
        };
        res.status(200).json(req.session.loggedInUser);
        return;
      }
      throw new Error("En användare är redan inloggad");
    } else {
      throw new Error("Fel användarnamn eller lösenord");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

export const logOutUser = (req, res) => {
  try {
    if (req.session.loggedInUser) {
      req.session.loggedInUser = null;
      res.status(200).json("Utloggad.");
      return;
    }
  } catch (err) {
    res.status(404).json("Någonting gick fel.");
  }
};

export const validateUser = (req, res) => {
  if (req.session.loggedInUser) {
    res.status(200).json(req.session.loggedInUser);
  } else {
    res.status(404).json("Ingen användare inloggad");
  }
};

export const getTags = async (req, res) => {
  try {
    let tags = await freeQuery(
      `SELECT ID, name FROM tag RIGHT JOIN user_tag ON user_tag.tag_ID = tag.ID AND user_tag.user_ID = ${req.query.id}`
    );
    res.status(200).json(tags);
  } catch (err) {
    res.status(500);
  }
};

export const addTag = async (req, res) => {
  try {
    let values = [[req.body.user_ID, req.body.tag_ID]];
    let post = await insert("user_tag", "user_ID, tag_ID", values);
    res.status(200).json("Taggen är tillagd på användaren");
  } catch (err) {
    res.status(500);
  }
};
