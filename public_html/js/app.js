var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
 $routeProvider.when('/',{
  templateUrl:"partials/home.html",
  controller: 'HomeController'
 })
  .when('/settings',{
   templateUrl:"partials/settings.html",
   controller:'SettingsController'
  })
  .otherwise({redirectTo:'/'});
});

app.controller('HomeController',function($scope){
 $scope.name = "Sorry..!! Controller Under Construction";
});

app.controller('SettingsController',function($scope){
 $scope.name = "settingscontrollers";
});