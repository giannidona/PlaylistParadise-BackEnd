import postServices from "../services/postServices.js";

const getPosts = async (req, res) => {
  try {
    const playlists = await postServices.getAll();
    res.json(playlists);
    return playlists;
  } catch (err) {
    console.log(err, "getPosts homeController");
  }
};

export default { getPosts };
