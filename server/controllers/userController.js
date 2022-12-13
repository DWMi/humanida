import { insert, selectFrom } from "../database/db.js";

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
