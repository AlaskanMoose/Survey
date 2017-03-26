app.controller("usersController", function($scope, $routeParams, usersFactory, $location){
  $scope.users = []
  $scope.user = {}
  $scope. errors = []

  function setUsers(data){
    $scope.users = data
    $scope.user = {}
  }
  usersFactory.index(setUsers)
  $scope.addUser = function() {
    $scope.errors = []
    if(!$scope.user.name){
      $scope.errors.push("Cannot leave name blank!")
    }else {
      usersFactory.create($scope.user, function(data){
        if(data.errors){
          $scope.errors = data.errors
        }else {
          usersFactory.index(setUsers)
          $location.url('/main')
        }
      })
    }
  }
  $scope.login = function(){
    $scope.errors = []
    usersFactory.login($scope.user, function(data){
      if(data.errors){
        $scope.errors = data
      }else {
        usersFactory.setID(data.id)
        $location.url('/dash')
      }
    })
  }
  $scope.logOut = function(){
    usersFactory.clearID()
  }
})
