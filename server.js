const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const utils = require("./server/Utilities");

const rootpath = "/home/bathirenathan/Documents/apps/";

app.use(express.static(path.join(__dirname, "build")));

app.get("/getFiles", function (req, res) {
  let folder = req.query.folder;
  let fullPath = rootpath;
  if (folder) fullPath += folder + "/";
  console.log("fullPath :: ", fullPath);
  utils
    .getFilesFromDirectory("/home/bathirenathan/Documents/apps/")
    .then((data) => res.send(data));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/download", function (req, res) {
  let file = req.query.file;
  let filePath = "/home/bathirenathan/Documents/apps/" + file;
  console.log(filePath);
  res.download(filePath);
});

app.listen(process.env.PORT || 4000);
