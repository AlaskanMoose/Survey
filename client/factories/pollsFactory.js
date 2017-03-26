app.factory('pollsFactory', ['$http', function($http){
  var factory = {}
  var polls = []
  factory.index = function(callback){
    $http.get('/polls')
    .then(function(result){
      callback(result.data.result)
    })
  }
  factory.create = function(poll, callback){
    $http.post('/polls', poll)
    .then(function(result){
      callback(result.data)
    })
  }
  factory.show = function(id, callback){
    $http.get('/polls/' + id)
    .then(function(result){
      callback(result.data.result)
    })
  }
  factory.delete = function(id, callback){
    $http.delete('/polls/' +id)
    .then(function(result){
      callback(result.data.result)
    })
  }
  factory.vote = function(id, optionId, callback){
    $http.get('/options/' + id, optionId)
    .then(function(result){
      callback(result)
    })
  }
  return factory
}])
