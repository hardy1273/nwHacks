let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  link: {
    type: String,
  },
  eventType: {
    type: String,
    enum: ['sport', 'performance']
  },
});

var eventModel = mongoose.model("event", eventSchema, "event");

module.exports = eventModel;
