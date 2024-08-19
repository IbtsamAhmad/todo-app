const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", toDoSchema);
