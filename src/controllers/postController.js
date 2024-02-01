import postServices from "../services/postServices.js";

const createPost = async (req, res) => {
  try {
    const { playlistLink } = req.body;

    const newPost = await postServices.create({
      playlistLink,
    });

    console.log(newPost);
    return newPost;
  } catch (error) {
    console.log(error, "createPost postController");
  }
};

export default { createPost };
