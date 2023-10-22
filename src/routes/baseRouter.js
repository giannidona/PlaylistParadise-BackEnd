import { Router } from "express";

export default class baseRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  get(path, ...callbacks) {
    this.router.get(path, ...this.applyCallbacks(callbacks));
  }

  post(path, ...callbacks) {
    this.router.post(path, ...this.applyCallbacks(callbacks));
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].status(500).send(error);
      }
    });
  }
}
