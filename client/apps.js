var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider){
  $routeProvider
    .when('/main', {
      templateUrl : './partials/main.html',
      controller : 'usersController'
    })
    .when('/register', {
      templateUrl: './partials/register.html',
      controller : 'usersController'
    })
    .when('/dash', {
      templateUrl :'./partials/dash.html',
      controller : 'pollsController'
    })
    .when('/new', {
      templateUrl : './partials/new.html',
      controller : 'pollsController'
    })
    .when('/polls/:id',{
      templateUrl: './partials/show.html',
      controller : 'showController'
    })
    .otherwise({
      redirectTo: '/main'
    })
})
