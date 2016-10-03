//controller for login
chatApp.controller('LoginController',function($scope,loginService,$location){
  $scope.authUser=function(){
    var user={};
    var url;
    user.username=$scope.username;
    user.password=$scope.password;
    loginService.authUser(user).then(function(data){
      //console.log(data);
      if(data.success==true){
        url='/chat';
      }else if (data.success==false) {
        url='/login';
      }
      $location.url(url);
    });
  };
});

//controller for registration
chatApp.controller('RegisterController',function($scope,registerService){
  $scope.registerUser=function(){
    var user={};
    user.username=$scope.username;
    user.email=$scope.email;
    user.phone=$scope.phone;
    user.password=$scope.password;
    var result=registerService.registerUser(user).then(function(data){

    });
  };
});

chatApp.controller('ChatController',function($scope){

});
