var fs = require("fs");
function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function (filename) {
      fs.readFile(dirname + filename, "utf-8", function (err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

function getAllfiles(dirname) {
  return new Promise((res, rej) => {
    fs.readdir(dirname, function (err, filenames) {
      if (err) rej(err);
      res(filenames);
    });
  });
}

function getAllFilesFromDir(path) {
  return getAllfiles(path).then((res) => {
    return res.reduce((map, r) => {
      console.log(r);
      let stat = fs.lstatSync(path + r);
      console.log(stat.isDirectory());
      map[r] = stat.isDirectory();
      return map;
    }, {});
  });
}


exports.getFilesFromDirectory = getAllFilesFromDir;