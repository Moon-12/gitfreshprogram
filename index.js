const csv = require("csv-parser");
const fs = require("fs");
const results = [];
console.log("Ashwi master has added changes");
fs.createReadStream("data1.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
    console.log("hello");
    
  });
