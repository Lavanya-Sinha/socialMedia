require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./config/db");
const cors = require("cors");
const { userRouter } = require("./Routes/user.route");

app.use(cors());

app.use("/login", userRouter);
app.use("/signup", userRouter);
app.use("/getUser", userRouter);

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
