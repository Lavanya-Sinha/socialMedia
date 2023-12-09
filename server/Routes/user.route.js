const express = require("express");
const { Usercontroller } = require("../Controller/User.Controller");

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/", Usercontroller.loginUser);
userRouter.post("/user", Usercontroller.signUpUser);
userRouter.post("/login", Usercontroller.UserLogin);

module.exports = { userRouter };
