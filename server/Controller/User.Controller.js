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
  username: Joi.string().trim().required().min(3),
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
    const users = await user.findOne({ email: value.email });
    if (value.password === users.password)
      return res.status(201).send({ status: true, users });
    else
      return res
        .status(401)
        .send({ status: false, message: "Wrong Credentials" });
  }
};

const getUser = async (req, res) => {
  console.log("this is get request");
  const users = await user.find({});
  //
  //this will return all the users from the DB
  return res.status(401).send({ status: false, users });
};

const signUpUser = async (req, res) => {
  const payload = req.body;
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
  getUser,
};

module.exports = { Usercontroller };
