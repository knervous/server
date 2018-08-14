const mongoose = require("mongoose");

const pass = encodeURIComponent(
  "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=="
);

mongoose.connect(
  `mongodb://localhost:${pass}@localhost:10255/test-data123?ssl=true`
);

const db = mongoose.connection;

db.on("error", err => {
  console.log("Connection error to DB");
  console.log("Tried to connect to Azure Cosmos DB on port 10255");
  console.log(err);
});

module.exports = db;
