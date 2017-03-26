app.factory("usersFactory", ["$http", function($http){
  var factory = {}
  var users = []
  var userID = ""

  factory.index = function(callback){
    $http.get('/users')
    .then(function(result){
      callback(result.data.result)
    })
  }

  factory.create = function(user, callback){
    $http.post('/users', user)
    .then(function(result){
      callback(result.data)
    })
  }
  factory.login = function(user, callback){
    $http.post('/login', user)
    .then(function(result){
      callback(result.data)
    })
  }
  factory.setID = function(id){
    userID = id
  }
  factory.clearID = function(){
    $http.post('/logout')
    userID = ""
  }
  factory.checkSession =  function(callback){
    $http.post("/checkSession", {"userID": userID})
    .then(function(result){
      callback(result.data.result)
    })
  }
  return factory
}])
