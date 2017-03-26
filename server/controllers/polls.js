var mongoose = require("mongoose")
var Poll = mongoose.model("Poll")

module.exports = {
  index : function(req, res){
    Poll.find({}, function(err, data){
      res.json({result: data})
    })
    .populate('_user')
    .exec(function(err, story){})

  },
  create : function(req, res){
    var newPoll = new Poll({ question: req.body.question, _user : req.session.userID })
    newPoll.options.push({text :req.body.text1, votes: 0})
    newPoll.options.push({text :req.body.text2, votes: 0})
    newPoll.options.push({text :req.body.text3, votes: 0})
    newPoll.options.push({text :req.body.text4, votes: 0})
    newPoll.save(function(err){
      if(!err){
        res.json({result: "the poll was added successfully!"})
      }
      if(err){
        res.json({errors: "there was errors in your entry please make sure all fields are field out, question must be atleast 6 characters, and options must be atleast 3 characters"})
      }
    })
  },
  show : function(req, res){
    Poll.findById(req.params.id, function(err, data){
      res.json({result : data})
    })
  },
  vote : function(req, res){
    console.log(req.body)
    console.log(req.params.id)
    Poll.findById(req.params.id , function(err, data){
      data.update({comments:req.body}, {$inc:{ vote : 1}})
    })
  },
  delete : function(req, res){
    Poll.findByIdAndRemove(req.params.id, function(err, data){
      res.json({result: "deleted"})
    })
  }
}
