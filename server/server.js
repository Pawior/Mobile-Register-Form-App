const express = require("express");
const app = express();
var cors = require("cors");

const PORT = 3000;
const corsOpt = {
  origin: true,
  methods: ["GET", "POST"],
};
let ctr = 0;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let userList = [];
app.use(cors(corsOpt));
app.post("/", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.post("/sendUser", (req, res) => {
  console.log(req.body);
  let doesUserExist = false;
  userList.forEach((user) => {
    if (user.login == req.body.login) {
      doesUserExist = true;
    }
  });
  if (!doesUserExist) {
    userList.push({
      id: ctr,
      login: req.body.login,
      password: req.body.password,
      date: req.body.date,
    });
    res.send(req.body);
    ctr++;
  } else {
    res.send({ error: "USEREXISTS" });
  }

  console.log("Lista: ");
  console.log(userList);
});
app.post("/getUserList", (req, res) => {
  setTimeout(() => {
    res.send(userList);
  }, 1000);
});
app.post("/deleteUser", (req, res) => {
  console.log(req.body);
  res.send("id usunietego usera: " + req.body.userId);
  userList = userList.filter((user) => user.id != req.body.userId);
  console.log(userList);
});
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
