var mongoose = require('mongoose')
var users = require('./../controllers/users.js')
var polls = require('./../controllers/polls.js')

module.exports = function(app){
  app.get('/users', users.index)
  app.post('/users', users.create)
  app.post('/login', users.login)
  app.post('/checkSession', users.checkSession)

  app.get('/polls', polls.index)
  app.post('/polls', polls.create)
  app.get('/polls/:id', polls.show)
  app.get('/options/:id', polls.vote)
  app.delete('/polls/:id', polls.delete)
}
