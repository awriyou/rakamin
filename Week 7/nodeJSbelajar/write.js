const fs = require("fs");
const payload = `Akucoba membuat file write and read di fs`;

fs.writeFile("halo.txt", payload, (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log("Data Succesfully Writted");
});
