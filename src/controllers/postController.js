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

const deletePost = async (req, res) => {
  try {
    const { pid } = req.params;
    console.log("pid:", pid);

    const deletePost = await postServices.delete({ _id: pid });

    console.log("post eliminado es: ", deletePost);
  } catch (error) {
    console.log(error, "deletePost postController");
  }
};

export default { createPost, deletePost };
