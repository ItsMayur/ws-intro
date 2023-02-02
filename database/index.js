var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/taskslist");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database is connected!");
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: String,
  passowrd: String,
});
let Users = mongoose.model("Users", userSchema);
module.exports.Users = Users;
