const express = require("express");
const app = express();
var cors = require("cors");

// app.use(express.text()) // w razie problemów z danymi użyj text()
const PORT = 3000;
const corsOpt = {
  origin: true,
  methods: ["GET", "POST"],
};
// instal corsów
// app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// User List
let userList = [];
app.use(cors(corsOpt));
app.post("/", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.post("/sendUser", (req, res) => {
  console.log("dsa");
  console.log(req.body);
  res.send(req.body);
  userList.push({ id: userList.length + 1, login: req.body.login });
  console.log("Lista");
  console.log(userList);
});
app.post("/getUserList", (req, res) => {
  setTimeout(() => {
    res.send(userList);
  }, 1000);
});
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
