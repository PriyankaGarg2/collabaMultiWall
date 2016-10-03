var todoApp=angular.module('todoApp',[]);
todoApp.controller('ctrl1',function($scope){
  $scope.first=1;
  $scope.second=1;

  $scope.updateValue=function () {
    $scope.calculation= +(+$scope.first + +$scope.second);

  };
});

todoApp.controller('ctrl2',function($scope){
  $scope.groceries=[
    {item:"a",purchased:false},
    {item:"b",purchased:false},
    {item:"c",purchased:false},
  ];
});

todoApp.controller('ctrl3',function($scope){
  $scope.groceries=[
    {item:"a",purchased:false},
    {item:"b",purchased:false},
    {item:"c",purchased:false},
  ];
  $scope.getList=function(){
    return $scope.showList ? "g1.html":"g2.html";
  };
});

todoApp.controller('ctrl4',function($scope){
  $scope.blur=0;
  $scope.keydown=function(e){
    $scope.kdkey=String.fromCharCode(e.keyCode);
  };
});
