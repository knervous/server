const mongoose = require("mongoose");

const User = mongoose.model(
  "Entry",
  new mongoose.Schema(
    {
      a: { type: Number },
      b: { type: String },
      c: { type: Boolean }
    },
    { versionKey: false }
  ),
  "entries"
);

module.exports = User;
