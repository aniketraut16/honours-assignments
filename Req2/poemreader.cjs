const fs = require("node:fs");

console.log("__dirname value:", __dirname);

console.log("before anonymous callback function");
fs.readFile(`${__dirname}/poem.txt`, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content:\n");
  console.log(data);
});
