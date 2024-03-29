import { postModel } from "../dao/models/postModel.js";

export default class postServices {
  static getById() {
    try {
      const post = postModel.findById();
      return post;
    } catch (error) {
      console.log(error, "getById postService");
    }
  }

  static getAll() {
    try {
      const playlist = postModel.find().lean();
      return playlist;
    } catch (error) {
      console.log(error, "getAll postService");
    }
  }

  static create(params) {
    try {
      const newPost = postModel.create(params);
      return newPost;
    } catch (error) {
      console.log(error, "create postService");
    }
  }

  static update() {
    try {
      const post = postModel.findByIdAndUpdate();
      return post;
    } catch (error) {
      console.log(error, "update postService");
    }
  }

  static delete(id) {
    try {
      const post = postModel.findByIdAndDelete(id);
      return post;
    } catch (error) {
      console.log(error, "delete postService");
    }
  }
}
