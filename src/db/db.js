const mongoose = require("mongoose");

const defaultConfig = {
  user: "localhost",
  pass: encodeURIComponent(
    "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=="
  ),
  host: "localhost",
  database: `rich-test`
};

module.exports = (config = defaultConfig) => {
  const { user, pass, host, database } = config;
  const connectionUri = `mongodb://${user}:${pass}@${host}:10255/${database}?ssl=true`;
  mongoose.connect(
    connectionUri,
    { useNewUrlParser: true }
  );

  const db = mongoose.connection;

  db.on("error", err => {
    console.log("Connection error to DB");
    console.log("Tried to connect to Azure Cosmos DB on port 10255");
    console.log(err);
  });

  return db;
};
