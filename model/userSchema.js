var mongoose = require("mongoose");

// this is userSchema with name and password
var Schema = mongoose.Schema;
var userdata = new Schema({
    name: { type: String, required: true },
    password: { type: String },
});

module.exports = mongoose.model("news", userdata);