import userServices from "../../services/user/userServices.js";

const register = async (req, res) => {
  try {
    const { username, password, profile_image } = req.body;

    const newUser = await userServices.create({
      username,
      password,
      profile_image,
    });

    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error, "register userController");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = userServices.findOne({ username, password }).lean();

  if (!user) {
    return console.log("ese usuario no existe");
  }
  return res.send("logueado");
};

export default { register, login };
