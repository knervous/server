const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { db, entryModel: Entry } = require("./src/db");

db.on("open", () => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/view/index.html"));
  });

  app.post("/submit", async (req, res) => {
    const { body } = req;
    console.log("Saving entry: " + JSON.stringify(body));
    let modeledEntry = new Entry(body);
    modeledEntry.save();
  });

  app.listen(3000, () => console.log("Example app listening on port 3000!"));
});
