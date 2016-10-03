var app2=angular.module('app2',[]);
app2.controller('ctrl1',function($scope){

});
app2.directive('helloWorld',function(){
  return{
    scope:{
      color: '@'
    },
    template:'<div>Hello world!!</div>'
  };
});
