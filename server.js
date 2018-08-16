const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { db, entryModel: Entry } = require("./src/db");
const crypto = require("crypto");

const richCosmosDbConfig = {
  user: "jack-paul",
  pass: encodeURIComponent(
    "xhqKAx0WVJoQSis6aEzrQPWrkFoeEh5SpYiGQoNnRBt35BvX5I25KtJGNn6gVxXuu5mukINW35DCqMySdPPRbg=="
  ),
  host: "jack-paul.documents.azure.com",
  database: `rich-jack-test`
};

db(richCosmosDbConfig).on("open", () => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/view/index.html"));
  });

  app.post("/submit", async (req, res) => {
    const { body } = req;
    console.log("Saving entry: " + JSON.stringify(body));
    const sessionId = uuidv4();
    for (let entry of body) {
      let modeledEntry = new Entry({ ...entry, sessionId });
      await modeledEntry.save();
    }
  });

  app.listen(3000, () => console.log("Example app listening on port 3000!"));
});

function uuidv4() {
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
}
