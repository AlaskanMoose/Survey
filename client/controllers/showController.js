app.controller('showController', function($scope, pollsFactory, $routeParams, $location){
  $scope.poll = {}
  $scope.id = $routeParams.id
  function getPoll(id){
    pollsFactory.show(id, function(data){
      $scope.poll = data
    })
  }
  getPoll($scope.id)
  $scope.vote = function(id, optionId){
    pollsFactory.vote(id, optionId, function(data){
      pollsFactory.index(getPoll)
    })
  }
})
