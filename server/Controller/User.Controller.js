const user = require("../Models/user");
const Joi = require("joi");

const UserValidSchema = Joi.object({
  email: Joi.string().trim().required().min(1),
  password: Joi.string().trim().required().min(1),
});

const UserSignUpSchema = Joi.object({
  email: Joi.string().trim().required().min(1),
  password: Joi.string().trim().required().min(1),
  name: Joi.string().trim().required().min(2),
  age: Joi.number().required().greater(13),
  username: Joi.string().trim().required().min(3)
});

const UserLoginSchema = Joi.object({
  username: Joi.string().trim().required().min(3),
  password: Joi.string().trim().required().min(1),
});


const loginUser = async (req, res) => {
  const payload = req.body;
  const { value, error } = UserValidSchema.validate(payload);
  if (error) {
    return res.status(406).send({ status: false, message: error.message });
  } else {
    const users = await user.find();
    if (value.email === users[0].email && value.password === users[0].password)
      return res.status(201).send({ status: true });
    else
      return res
        .status(401)
        .send({ status: false, message: "Wrong Credentials" });
  }
};

const UserLogin = async (req, res) => {
  const payload = req.body;
  const { value, error } = UserLoginSchema.validate(payload);
  if (error) {
    return res.status(406).send({ status: false, message: error.message });
  } else {
    const createdUser = await user.create(value);
    res
      .status(201)
      .send({ status: true, user: createdUser, message: "Account Created" });
  }
};

const signUpUser = async (req, res) => {
  console.log("signup-----------------");
  const payload = req.body;
  console.log("payload:", payload);
  // name , age , email , password
  //validate
  const { value, error } = UserSignUpSchema.validate(payload);
  if (error) {
    return res.status(406).send({ status: false, message: error.message });
  } else {
    const createdUser = await user.create(value);
    res
      .status(201)
      .send({ status: true, user: createdUser, message: "Account Created" });
  }
};

const Usercontroller = {
  loginUser,
  signUpUser,
  UserLogin
};

module.exports = { Usercontroller };
