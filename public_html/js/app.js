var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
 $routeProvider.when('/', {
  templateUrl: "partials/home.html",
  controller: 'HomeController'
 })
  .when('/settings', {
   templateUrl: "partials/settings.html",
   controller: 'SettingsController'
  })
  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function ($scope) {
 $scope.selectedMail;

 $scope.setSelectedMail = function (mail) {
  $scope.selectedMail = mail;
 };

 $scope.isSelected = function (mail) {
  if ($scope.selectedMail) {
   return $scope.selectedMail === mail;
  }
 };
});

app.controller('MailListingController',function ($scope, $http) {
  $http.get('json/mails.json').success(function (data) {
   $scope.email = data;
  });
 });

app.controller('ContentController', function ($scope) {
 $scope.showingReply = false;
 
 $scope.reply = {};
 
 $scope.toggleReplyForm = function(){
  $scope.showingReply = !$scope.showingReply;
  $scope.reply.to = $scope.selectedMail.to;
  $scope.reply.body = "\n\n\n***-------------------------------------------***\n\n" + $scope.selectedMail.body;
 };
 
 $scope.$watch('selectedMail',function(evt){
  $scope.showingReply = false;
  $scope.reply = {};
 });
});

app.controller('SettingsController', function ($scope) {
 $scope.name = "settingscontrollers";
});