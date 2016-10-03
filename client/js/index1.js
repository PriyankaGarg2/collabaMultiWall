var myApp=angular.module('myApp',['ngRoute'])
.config(function($routeProvider,$locationProvider){
  // $locationProvider.html5Mode(true);
  $routeProvider
  .when('/about/:id',{
    templateUrl:'about.html',
    controller:'ctrl1'
  })
  .when('/home',{
    templateUrl:'home.html',
    controller:'ctrl2'
  })
  .otherwise({
    redirectTo:'/'
  });
});

myApp.controller('ctrl1',function($scope,$routeParams){
  console.log($routeParams.id);
  $scope.value="home page"

});

myApp.controller('ctrl2',function($scope){

$scope.value="about page"
});
