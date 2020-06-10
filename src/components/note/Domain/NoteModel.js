const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String,
  tags: Array,
  content: Array
});

noteSchema
  .virtual("data")
  .get(function () {
    return {
      title: this.title,
      tags: this.tags,
      content: this.content
    };
  })
  .set(function ({ title, tags, content }) {
    this.title = title;
    this.tags = tags;
    this.content = content;
  });

module.exports = mongoose.model("Note", noteSchema);