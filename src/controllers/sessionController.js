import userServices from "../services/userServices.js";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await userServices.create({
      username,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });

    return newUser;
  } catch (error) {
    console.log(error, "register userController");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userServices.findOne({ username });

    if (user && compareSync(password, user.password)) {
      jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    console.log(error, "login userController.");
    res.status(500).send("Internal Server Error");
  }
};

const getProfile = async (req, res) => {
  try {
    const { token } = req.cookies;
    console.log("Token:", token);

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          console.log("JWT Verification Error:", err);
          res.status(401).send("Unauthorized");
        } else {
          console.log("User:", user);
          res.json(user);
        }
      });
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.log(error, "getProfile userController.");
    res.status(500).send("Internal Server Error");
  }
};

export default { register, login, getProfile };
