app.controller('pollsController', function($scope, $location, usersFactory, pollsFactory){
  usersFactory.checkSession(function(isValid){
    if(!isValid){
      $scope.errors = []
      $location.url('/main')
    }
  })
  $scope.polls = []
  $scope.poll = {}
  $scope.temp = false
  function setPolls(data){
    $scope.polls = data
    $scope.poll = {}
  }
  pollsFactory.index(setPolls)

  $scope.addPoll = function(){
    $scope.errors = {}
    pollsFactory.create($scope.poll, function(data){
      if(data.result){
        $location.url('/dash')
      }else {
        $scope.errors = data.errors
      }
    })
  }
  $scope.delete = function(id){
    pollsFactory.delete(id, function(data){
      pollsFactory.index(setPolls)
    })
  }
})
