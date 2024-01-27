import userServices from "../../services/user/userServices.js";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await userServices.create({
      username,
      password,
    });

    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error, "register userController");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = userServices.findOne({ username, password }).lean();

    if (!user) {
      return console.log("ese usuario no existe");
    }

    req.session.username = user.username;
    req.session.userId = user._id;
    req.session.profile_image = user.profile_image;
    req.session.isLogged = true;

    return res.send("logueado");
  } catch (error) {
    console.log(error, "login userController.");
  }
};

export default { register, login };
