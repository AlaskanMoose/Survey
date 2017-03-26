var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  index: function(req, res){
    User.find({}, function(err, result){
      if(err){

      }else {
        res.json({ result: result })
      }
    })
  },
  create : function(req, res){
    User.find({name: req.body.name}, function(err, data){
      if(data.length === 0 ){
        var newUser = new User({name: req.body.name})
        newUser.save(function(err){

        })
        res.json({result: ["Success"]})
      }else {
        res.json({errors : ["Username already taken!"]})
      }
    })
  },
  login : function(req, res){
    User.find({name: req.body.name}, function(err, data){
      if(data.length === 1){
        req.session.userID = data[0]._id
        res.json({result: "You have loged in", id: data[0]._id})
      }else {
        res.json({errors: "User does not exist"})
      }
    })
  },
  checkSession : function(req, res){
    if(req.session.userID === req.body.userID){
      res.json({ result: true })
    }else {
      res.json({ result: false })
    }
  },
}
