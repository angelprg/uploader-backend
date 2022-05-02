const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const filesRouter = require("./routes/files/files");
const loginRouter = require("./routes/users/auth");
const userRouter = require("./routes/users/users");

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/files", filesRouter);
app.use("/auth", loginRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started! Running on port ${PORT}`);
});
