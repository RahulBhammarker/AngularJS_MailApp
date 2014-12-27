var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
 $routeProvider.when('/',{
  templateUrl:"partials/home.html",
  controller: 'MyController'
 })
  .when('/settings',{
   templateUrl:"partials/settings.html",
   controller:'SettingsController'
  })
  .otherwise({redirectTo:'/'});
});

app.controller('MyController',function($scope){
 $scope.name = "mycontroller";
});

app.controller('SettingsController',function($scope){
 $scope.name = "settingscontrollers";
});