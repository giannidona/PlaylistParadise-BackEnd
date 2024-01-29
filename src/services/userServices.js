import { userModel } from "../dao/models/userModel.js";

export default class userServices {
  static getById() {
    try {
      const user = userModel.findById();
      return user;
    } catch (error) {
      console.log(error, "getById userService");
    }
  }

  static create(params) {
    try {
      const newUser = userModel.create(params);
      return newUser;
    } catch (error) {
      console.log(error, "create userService");
    }
  }

  static findOne(params) {
    try {
      const user = userModel.findOne(params).lean();
      return user;
    } catch (error) {
      console.log(error, "findOne userService");
    }
  }
}
