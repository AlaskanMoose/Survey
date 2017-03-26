var mongoose = require("mongoose")

var Options = new mongoose.Schema({
  text: {type : String, required:true, minlength: 3},
  votes : {type : Number, required: true},
}, {timestamps:true})

var pollSchema = new mongoose.Schema({
  question : {type: String, required:true, minlength: 8},
  options : [Options],
  _user : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
}, {timestamps: true})
mongoose.model("Poll", pollSchema)
