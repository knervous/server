const mongoose = require("mongoose");

const Entry = mongoose.model(
  "Entry",
  new mongoose.Schema(
    {
      sessionId: { type: String },
      questionID: { type: String },
      time: { type: Date },
      tags: { type: String },
      optionLeft: { type: String },
      optionRight: { type: String },
      answer: { type: String }
    },
    { versionKey: false }
  ),
  "entries"
);

module.exports = Entry;
